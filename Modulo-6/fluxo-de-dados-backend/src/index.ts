import express, { Request , Response} from "express";
import cors from "cors"
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors())

//EXERCICIO 1)
// Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint de teste com método GET no path “/test” que retorna uma mensagem genérica avisando que a API está funcional. 

app.get("/test"  , (request: Request, response: Response) => {
    response.status(201).send("API Bateu!  :D")
} )

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;

    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
