import express, {Request, Response} from "express"
import cors from "cors"
import { AddressInfo } from "net";
import {afazeres, afazer} from "./dataBase"

const app = express()

//converte o body de todas as respostas para o formato Json
app.use(express.json())

//habilita o compartilhamento de informações para sites de outros domínios HTTP
app.use(cors())

//EXERCICIO 1)
// Faça novamente a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “pong”.

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

//EXERCICIOS 2, 3 
// Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”to dos”). Crie uma variável de tipo para representar cada afazer.Crie um array de afazeres para servir como base de dados da nossa API e utilize a tipagem desenvolvida no exercício anterior. 
//RESPOSTA: Fiz a tipagem e criei o array no arquivo dataBase.ts


//EXERCICIO 4)
//Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja, retorne ou afazeres //concluídos ou somente os que ainda estão em andamento.

app.get("/users/todos/true", (req: Request, res: Response) => { 

    const listaAfazeresConcluidos:Array<afazer> = afazeres.filter((afazer)=> {
        return afazer.completed === true
    }) 
    res.status(201).send(listaAfazeresConcluidos)

})
//EXERCICIO 5)
//Construa um endpoint de criação de afazer. A resposta deve retornar o array de afazeres atualizado.

app.post("/users/todos/create", (req: Request, res: Response) => {

    let title = req.body.title
    let completed = req.body.completed
    

    if(!title && completed){
        res.status(404).send("Verifique os parâmetros informados")
        return
    }

    const novaTarefa: afazer  = {
        "userId": 1,
        "id": afazeres.length+1,
        "title": title,
        "completed": completed
    }

    let listaAtualizada : Array<afazer> = [...afazeres, novaTarefa]
    res.status(201).send(listaAtualizada)
})

//POR PADRÃO DEIXAR POR ULTIMO, NO ARQUIVO DE CÓDIGO!
//execução na porta 3003  
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  })