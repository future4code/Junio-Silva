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

//EXERCICIO 2A) Explique, com as suas palavras, essa tabela
// CREATE TABLE MovieCast (
//     movie_id VARCHAR(255),
//     actor_id VARCHAR(255),
// FOREIGN KEY (movie_id) REFERENCES Movie(id),
// FOREIGN KEY (actor_id) REFERENCES Actor(id)
// );
//RESPOSTA: Entendi que é declarada coluna, depois você defina que aquela coluna é uma Foreign Key e passa a referencia que nada mais é que um ítem que está em outra tabela. Nesse caso a tabela acima, é usada para juntar ítens de outras duas tabelas, trazendo informações sobre o filme e ator

//EXERCICIO 2B) Crie, ao menos, 6 relações nessa tabela 
//RESPOSTA: 
// INSERT INTO MovieCast (movie_id, actor_id)
// VALUES(
// 1,
// "006"
// );

// INSERT INTO MovieCast (movie_id, actor_id)
// VALUES(
// 1,
// "001"
// );

// INSERT INTO MovieCast (movie_id, actor_id)
// VALUES(
// 2,
// "003"
// );

// INSERT INTO MovieCast (movie_id, actor_id)
// VALUES(
// 3,
// "002"
// );

// INSERT INTO MovieCast (movie_id, actor_id)
// VALUES(
// 3,
// "005"
// );

// INSERT INTO MovieCast (movie_id, actor_id)
// VALUES(
// 3,
// "004"
// );

//EXERCICIO 2C) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
//RESPOSTA: Não funciona porque quando tenta fazer a refencia é verificado que o ID nao existe na tabela que está sendo referenciada.
//Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`joy-419713-junio-silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

//EXERCICIO 2D) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
//RESPOSTA: Não é possível apagar, primeiro tem que desvincular chave pra excluir.
//Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`joy-419713-junio-silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))



//EXERCICIO 3A) Explique, com suas palavras, a query. O que é o operador ON?
//SELECT * FROM Movie 
//INNER JOIN Rating ON Movie.id = Rating.movie_id;
//RESPOSTA: o ON foi usado para indicar a condição, consigo ler ele como sendo "onde", exemplo: SELECT * "ONde" idfilme = idComentario 


//EXERCICIO 3B) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
// SELECT Films.id, Films.título,Rating.rate
// FROM Films 
// INNER JOIN Rating ON Films.id = Rating.id;


const server = app.listen(process.env.PORT || 3006, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});