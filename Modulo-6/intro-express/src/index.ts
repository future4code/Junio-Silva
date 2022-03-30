import express, {Request, Response} from "express"
import cors from "cors"
import {usuarios, user, post} from "./Database"

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
//EXERCICIOS 2 e 3)

//fiz a tipagem e criei, o array de objetos no arquivo database.ts

//********************************************************************************************************* */
//EXERCICIO 4) 

app.get("/user", (request: Request, response: Response) => {  

  let listaUsuario: Array<user> =  usuarios
  response.status(201).send(  
    listaUsuario
    )
})

//********************************************************************************************************* */
//EXERCICIOS 5 e 6) 

//fiz a tipagem e criei o array de posts no arquivo Database.ts

//JUSTIFICATIVA: Eu criei o array de posts dentro do array, de usuário... 
//Acho que é o mais coerente, que dessa forma depois dá pra filtrar esses posts pelo ID do usuário.


//********************************************************************************************************* */
//EXERCICIO 7) 

app.get("/posts", (request: Request, response: Response) => {  

  let listaUsuario1 : Array<user> =  usuarios
  let posts: Array<post> = listaUsuario1.map((usuario)=>{ return usuario.posts}).flat(1)
  response.status(201).send(posts)
})

//********************************************************************************************************* */
//EXERCICIO 8) 

app.get("/posts/:id", (request: Request, response: Response) => {  
  const ID : number = Number(request.params.id) 
  console.log(ID)
  if(!ID){
    response.status(400).send("O fornecimento de um ID é obrigatório, tente novamente informando todos os parâmetros necessários!")
  }

  let listaUsuario2 =  usuarios
  let postPorId 
  
  listaUsuario2.forEach((usuario)=>{
    if(usuario.id === ID){ return postPorId = usuario.posts}
  })

  response.status(201).send(postPorId)
})

//POR PADRÃO DEIXAR POR ULTIMO, NO ARQUIVO DE CÓDIGO!
//execução na porta 3003  
app.listen(3000, ()=> {

  console.log("Servidor Funcionando!")
})