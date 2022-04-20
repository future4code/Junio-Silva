
import express, { Response, Request } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { connection } from "./connection"

const app = express();
app.use(express.json());
app.use(cors());

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
    } catch ( error:any ) {
          console.log( error.message )
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

    // NA LINHA DE BAIXO TIVE QUE TRANSFORMAR O RESULTADO EM STRING, SE EU DEIXASSE COMO NÚMERO DAVA ERRO (NÃO SEI PQ)
     const count = result[0][0].count.toString();
     return count;
  };

app.get("/countGender/:gender", async (req: Request, res: Response) => {
    try {

        const gender = req.params.gender
        const result =  await countActors(gender)
        res.status(200).send(result)
        res.end()

      } catch (error:any) {
            console.log(error.message)
        res.status(500).send("Unexpected error")
      }

})



