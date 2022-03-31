import express, {Request, Response} from "express"
import cors from "cors"

const app = express()

//converte o body de todas as respostas para o formato Json
app.use(express.json())

//habilita o compartilhamento de informações para sites de outros domínios HTTP
app.use(cors())

//POR PADRÃO DEIXAR POR ULTIMO, NO ARQUIVO DE CÓDIGO!
//execução na porta 3003  
app.listen(3000, ()=> {

    console.log("Servidor Rodando!")
  })