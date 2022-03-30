import express, {Request, Response} from "express"
import cors from "cors"
import {usuarios} from "./Database"

const app = express()

//converte o body de todas as respostas para o formato Json
app.use(express.json())

//habilita o compartilhamento de informações para sites de outros domínios HTTP
app.use(cors())

//********************************************************************************************************* */

//EXERCICIO 1)  
// Faça a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para a URL base da API. Esse endpoint pode responder apenas com um status ou mensagem fixa.'
app.get("/", (request, Response) => {   

  Response.status(201).send("Bateu ok")

})

//********************************************************************************************************* */
//EXERCICIO 2) 
console.log(usuarios)




//********************************************************************************************************* */
//EXERCICIOS 2 e 3)

//fiz a tipagem e criei, o array de objetos no arquivo database.ts

//********************************************************************************************************* */
//EXERCICIO 4) 

app.get("/users", (request, Response) => {   

  Response.status(201).send("Bateu ok")
  
})


//********************************************************************************************************* */
//EXERCICIO 5) 
//********************************************************************************************************* */
//EXERCICIO 6) 
//********************************************************************************************************* */
//EXERCICIO 7) 
//********************************************************************************************************* */
//EXERCICIO 8) 
//********************************************************************************************************* */
//EXERCICIO 9) 










//POR PADRÃO DEIXAR POR ULTIMO, NO ARQUIVO DE CÓDIGO!
//execução na porta 3003  
app.listen(3000, ()=> {

  console.log("Servidor Funcionando!")
})