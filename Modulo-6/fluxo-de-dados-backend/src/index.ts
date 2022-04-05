import express, { Request , Response} from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { v4 as idGenerator } from 'uuid';
import { product, productsList } from './data'

const app = express();

app.use(express.json());
app.use(cors())

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

app.post("/produto", (request: Request, response: Response) => {
    
  let productName = request.body.name
  let productPrice = request.body.price


  try{
 
  if(!productName || !productPrice) {
    throw new Error("Faltam informações no cadastro")
  }

  const newProduct = {
    id: idGenerator(),
    name: productName,
    price: productPrice
  }

  const newProductList = [...productsList, newProduct ]

  response.status(201).send(newProductList)
}

  catch (error: any) {
    console.log(error)
    response.status(422).send(error.message)
  }
 })



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;

    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});