
import express, { Response, Request } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { connection } from "./connection"
import { v4 as idGenerator } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors());



//CRIANDO USUÁRIO, FUNÇÃO E ENDPOINT
type user = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

//TESTE
app.get("/user", async (req: Request, res: Response): Promise<void> => {

    let newUser: user = {
        id: idGenerator(), 
        name: req.body.name, 
        nickname:req.body.nickname, 
        email:req.body.email
    }


    try {
         await connection("TodoListUser")
         .insert(newUser)
        res.status(201).send("Usuário criado!")
    }
    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})


/*

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}

getActorById("001")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

EXERCICIO 1A)  Explique como é a resposta que temos quando usamos o raw.
RESPOSTA: Com o raw a resposta vem em um array duplo porisso é necessario usar [0][0] para extrair os valores do response.
*/



/*
EXERCICIO 1B) Faça uma função que busque um ator pelo nome;
*/
const getActorByName = async (name: string): Promise<any> => {
    const [result] = await connection("Actor")
        .select()
        .where(`name`, 'like', `%${name}%`)

    return result
}

app.get("/GetActor", async (req: Request, res: Response) => {
    try {
        const name = req.query.name as string

        const result = await getActorByName(name)

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})



const server = app.listen(process.env.PORT || 3006, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

//RESPOSTA 1C) Faça uma função que receba um gender retorne a quanidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);

    // NA LINHA DE BAIXO TIVE QUE TRANSFORMAR O RESULTADO EM STRING, SE EU DEIXASSE COMO NÚMERO DAVA ERRO (NÃO SEI PQ)
    const count = result[0][0].count.toString();
    return count;
};


app.get("/countGender/:gender", async (req: Request, res: Response): Promise<void> => {
    try {

        const gender: string = req.params.gender
        const result: string = await countActors(gender)
        res.status(200).send(result)
        res.end()

    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }

})
//EXERCICIO 2A)
//Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

const atualizaSalario = async (
    id: number,
    salary: number
): Promise<void> => {
    await connection("Actor")
        .update({
            salary: salary
        })
        .where({
            id: id
        })
}

app.put("/actor/changesalary/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = Number(req.params.id)
        const newSalary = req.body.newSalary

        atualizaSalario(id, newSalary)

        res.status(200).send({ message: "Salario alterado." }
        )
    }
    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }

})

//EXERCICIO 2B)
//Uma função que receba um id e delete um ator da tabela

const deleteActor = async (id: number): Promise<void> => {
    await connection("Actor")
        .delete()
        .where({
            id: id
        })
}

//TESTE
app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = Number(req.params.id)

        deleteActor(id)
        res.status(200).send({ message: "Ator excluido." })

    }
    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//EXERCICIO 2C)
//c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

const mediaSalario = async (gender: string): Promise<void> => {
    const result = await connection("Actor")
        .avg("salary as media")
        .where({ gender : gender  });
        return result[0]?.media;
}

//TESTE
app.get("/actor/mediaSalarial", async (req: Request, res: Response): Promise<void> => {
    try {
        const gender: string = req.query.gender as string
        
        const media = mediaSalario(gender)
        console.log(media)
        console.log(gender)
        res.status(200).send(media)

    }
    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
