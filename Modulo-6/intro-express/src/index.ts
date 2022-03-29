import express from "express"
import cors from "cors"

const app = express()

//converte o body de todas as respostas para o formato Json
app.use(express.json())

//habilita o compartilhamento de informações para sites de outros domínios HTTP
app.use(cors())

//execução na porta 3003
app.listen(3003, ()=> {
  console.log("teste ok!")
})