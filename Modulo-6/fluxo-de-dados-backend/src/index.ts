import express, { Request , Response} from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { v4 as idGenerator } from 'uuid';
import { product, productsList } from './data'

const app = express();
app.use(express.json());
app.use(cors())

const Errors: { [chave: string]: { status: number, message: string } } = {
  AUTHORIZATION_NOT_FOUND: {status: 401, message: "Favor enviar header authorization"},
  PLAYLIST_NOT_FOUND: {status: 404, message: "Produto nao encontrado"},
  TRACK_EXISTS: {status: 409, message: "Esse produto já existe"},
  MISSING_PARAMETERS: {status: 422, message: "Alguma informação está faltando. Consulte a documentação."},
  SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"},
}

//EXERCICIO 1)
// Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint de teste com método GET no path “/test” que retorna uma mensagem genérica avisando que a API está funcional. 

app.get("/test"  , (request: Request, response: Response) => {
    response.status(201).send("API Bateu!  :D")
} )

// Exercício 2)
// Crie um arquivo chamado **`data.js`** que exporta um array de produtos. 
// Cada produto será representado por um objeto com propriedades: id (`string`), name (`string`) e price (`number`). 
//Popule manualmente o array com pelo menos 3 produtos.
// RESPOSTA: arquivo criado, data.ts

// Exercício 3)
// Desenvolva um endpoint que cria um novo produto e retorna a lista de produtos atualizada. 
// A id do produto deve ser gerada automaticamente pela API.

app.post("/produto/create", (request: Request, response: Response) => {
    
  let productName = request.body.name
  let productPrice = request.body.price

  try{
 
  if(!productName || !productPrice) {
    throw new Error(Errors.MISSING_PARAMETERS.message)
  }

  const newProduct: product = {
    id: idGenerator(),
    name: productName,
    price: productPrice
  }

  const newProductList = [...productsList, newProduct ]

  response.status(201).send(newProductList)
}

catch(error: any) {
  switch(error.message) {
     case Errors.AUTHORIZATION_NOT_FOUND.message:
        response.status(Errors.AUTHORIZATION_NOT_FOUND.status).send(Errors.AUTHORIZATION_NOT_FOUND.message);
        break;
     case Errors.PLAYLIST_NOT_FOUND.message:
        response.status(Errors.PLAYLIST_NOT_FOUND.status).send(Errors.PLAYLIST_NOT_FOUND.message);
        break;
     case Errors.MISSING_PARAMETERS.message:
        response.status(Errors.MISSING_PARAMETERS.status).end(Errors.MISSING_PARAMETERS.message);
        break;
     case Errors.TRACK_EXISTS.message:
        response.status(Errors.TRACK_EXISTS.status).send(Errors.TRACK_EXISTS.message);
        break;
     default:
        response.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
  }
}
 })
// Exercício 4)
// Crie um endpoint que retorna todos os produtos.

app.get("/mostrarprodutos",  (request: Request, response: Response) => { 

  response.status(200).send(productsList)

})

// Exercício 5)
// Crie um endpoint que edita o preço de um determinado produto e retorna a lista de produtos atualizada.

app.put("/users/edit", (request: Request, response: Response) => { 

  let paramId = request.query.id
  let paramPrice =  request.body.price

  console.log(paramId,paramPrice)
  try{

    if ( !paramId || !paramPrice ) {
      throw new Error(Errors.MISSING_PARAMETERS.message)
    }
    let produtosAtualizados = productsList.map((produto)=> {
      if(produto.id === paramId){ 
        produto.price = paramPrice
      }
      return produto
    })
  
    response.status(201).send(produtosAtualizados)

  }catch(error: any) {
  switch(error.message) {
     case Errors.AUTHORIZATION_NOT_FOUND.message:
        response.status(Errors.AUTHORIZATION_NOT_FOUND.status).send(Errors.AUTHORIZATION_NOT_FOUND.message);
        break;
     case Errors.PLAYLIST_NOT_FOUND.message:
        response.status(Errors.PLAYLIST_NOT_FOUND.status).send(Errors.PLAYLIST_NOT_FOUND.message);
        break;
     case Errors.MISSING_PARAMETERS.message:
        response.status(Errors.MISSING_PARAMETERS.status).end(Errors.MISSING_PARAMETERS.message);
        break;
     case Errors.TRACK_EXISTS.message:
        response.status(Errors.TRACK_EXISTS.status).send(Errors.TRACK_EXISTS.message);
        break;
     default:
        response.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
  }
}
})









//PADRAO DEIXAR NO FIM DO CÓDIGO.
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;

    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});