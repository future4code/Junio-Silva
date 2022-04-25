
import express, { Response, Request } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { connection } from "./connection"
import { v4 as idGenerator } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors());

type user = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

// EXERCICIO: CRIANDO USUÁRIO, FUNÇÃO E ENDPOINT
app.post("/user", async (req: Request, res: Response): Promise<void> => {

    const name = req.body.name
    const nickname = req.body.nickname
    const email = req.body.email

    let statusCode: number | undefined = 500

    let newUser: user = {
        id: idGenerator(),
        name,
        nickname,
        email
    }

    try {

        if (!name || !nickname || !email) {
            console.log("entrou")
            statusCode = 400
            throw new Error("Você não passou todos os parâmetros.")
        }

        await connection("TodoListUser")
            .insert(newUser)
        res.status(201).send("Usuário criado!")
    }
    catch (error: any) {
        res.status(statusCode).send(error.sqlMessage || error.message)
    }
})

// DESAFIO PEGAR TODOS OS USUARIOS
app.get("/user/all", async (req: Request, res: Response): Promise<void> => {

    try {
     
        const users = await connection("TodoListUser")
        .select('id', 'nickname')
        res.status(200).send( { users: users  } )

    } catch (error:any) {
        res.status(404).send(error.sqlMessage || error.message) 
    }

})

// EXERCICIO: PEGANDO USUÁRIO PELO ID
//OBS: Eu fiz essa questão usando filtro de JS, depois que pensei em trocar para QueryBuilder.
//mas como abaixo tem um exercicio de pegar task que é  igual, resolvi deixar cada um com uma lógica diferente mesmo esse resolvendo em JS e o de task usando Query Builder.
app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
    const paramId: string = req.params.id

    let statusCode: number = 500

    try {
        if (!paramId) {
            statusCode = 400
            throw new Error("É necessário informar o ID do usuário.")
        }

        const usersList: any = await connection("TodoListUser")
        .select()

        const userById: user | undefined = usersList.find(
            (user: user) => user.id === paramId)

        if (!userById) {
            statusCode = 404
            throw new Error("Nenhum usuário corresponde ao ID informado.")
        }

        res.status(202).send(userById)

    }catch (error: any) {
        res.status(statusCode).send(error.sqlMessage || error.message)
    }

})

// EXERCICIO: EDITANDO UM USUÁRIO  PELO ID
app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
    const paramId: string = req.params.id
    const name: string = req.body.name
    const nickName: string = req.body.nickname

    console.log(paramId)
    let statusCode: number = 500

    try {

        if (!paramId) {
            statusCode = 400
            throw new Error("É necessário informar o ID do usuário.")
        }

        if (name.length === 0) {
            throw new Error("O campo 'nome' nao pode ser vazio.")
        } else if (name) {

            await connection("TodoListUser")
                .update({
                    name: name,
                })
                .where({ id: paramId });
        }

        if (nickName.length === 0) {
            throw new Error("O campo 'nickname' nao pode ser vazio.")
        } else if (nickName) {

            await connection("TodoListUser")
                .update({
                    nickname: nickName,
                })
                .where({ id: paramId });
        }

        res.status(202).send({ message: "Usuário alterado com sucesso!" })

    } catch (error: any) {
        res.status(statusCode).send(error.sqlMessage || error.message)
    }

})


//EXERCICIO: CRIAR TASKS
app.post("/task", async (req: Request, res: Response): Promise<void> => {

    let statusCode: number = 500

    type task = {
        id: string,
        title: string
        description: string
        limit_date: string
        creator_user_id: string
    }

    const creatorUserId: string = req.query.id as string
    
    const title: string = req.body.title
    const description: string = req.body.description
    const reqDate: string = req.body.limitDate


    const [day, month, year]: Array<string> = reqDate.split("/")
    const tableDate: string = `${year}/${month}/${day}`

    try {

        if (!title || !description || !reqDate) {
            console.log("entrou")
            statusCode = 400
            throw new Error("É necessário informar todos os parametros: title, description e limitDate .")
        }

        const newTask: task = {
            id: idGenerator(),
            title: title,
            description: description,
            limit_date: tableDate,
            creator_user_id: creatorUserId,
        }

        await connection("TodoListTask")
            .insert(newTask)
        res.status(201).send("Tarefa criada!")
    }
    catch (error: any) {
        res.status(statusCode)
        .send(error.sqlMessage || error.message)
    }
})


//EXERCICIO: PEGAR TAREFA PELO ID.

app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
    const paramId: string = req.params.id as string
    let statusCode:number = 500

    try {
        if (!paramId) {
            statusCode = 400
            throw new Error("É necessário informar o ID da tarefa.")
        }
        
        const result = await connection("TodoListTask")
        .innerJoin(
            "TodoListUser",
            "TodoListTask.creator_user_id",
            "TodoListUser.id"
        )
        .select("TodoListTask.*", "TodoListUser.nickname")
        .where({"TodoListTask.id" : paramId})

        if (!result[0]) {
            statusCode = 404
            throw new Error("Nenhuma tarefa corresponde ao ID informado.")
        }

        const [dia, mes, ano]:Array<string> = JSON.stringify(result[0].limit_date)
        .substring(0,11)
        .split("-")

        result[0].limit_date = `${ano}/${mes}/${dia}`

        res.status(202).send(result[0] )

    } catch (error:any) {
        res.status(statusCode)
        .send(error.sqlMessage || error.message) 
    }
})



//---------------------------------------------------------------------------------------//
// POR PADRÃO, DEIXAR ESSE BLOCO DE CÓDIGO NO FINAL DO ARQUIVO.
const server = app.listen(process.env.PORT || 3006, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
//---------------------------------------------------------------------------------------//