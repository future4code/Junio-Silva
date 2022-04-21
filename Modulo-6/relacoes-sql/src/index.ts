import express, { Response, Request } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { connection } from "./connection"

const app = express();
app.use(express.json());
app.use(cors());

//EXERCICIO 1A) Explique o que é uma chave estrangeira
//RESPOSTA: É uma ou ID de um ítem em outra tabela, é usado para linkar os dois ítens mesmo estando em tabelas distintas.

//EXERCICIO 1B) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
//RESPOSTA:
//-------------------------------
// CREATE TABLE Rating (
//     id VARCHAR(255) PRIMARY KEY,
// comment TEXT NOT NULL,
//     rate FLOAT NOT NULL,
// Filme_id INT,
// FOREIGN KEY (Filme_id) REFERENCES Films(id)
// );
//-------------------------------
// INSERT INTO Rating (id, comment, rate, filme_id)
// VALUES(
// 001,
// "Muito engraçado, eles trocam de corpo!",
// 8,
// 1
// );
//-------------------------------
// INSERT INTO Rating (id, comment, rate, filme_id)
// VALUES(
// 002,
// "Amei a dona pituxa, é realmente um doce de mãe!",
// 7,
// 2
// );
//-------------------------------
//EXERCICIO 1C) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
//RESPOSTA:  Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: Houve restrição ou falha na chave estrangeira 

//EXERCICIO 1D) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
//RESPOSTA: ALTER TABLE Films DROP COLUMN avaliacao;

//EXERCICIO 1E) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
//RESPOSTA: Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: restrição de chave estrangeira falha 
//Não foi possível excluir pq este ítem tem ligação com outro ítem de outra tabela.


const server = app.listen(process.env.PORT || 3006, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});