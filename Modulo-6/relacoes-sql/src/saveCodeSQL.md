## Arquivo só para salvar tudo que eu escrevi no Workbent.
## para o caso de futuras consultas.

```sql
#_____________________________________________________
# VISUALIZAR ESTRUTURA DE CRIAÇÃO DAS TABELAS.       
#_____________________________________________________
DESCRIBE Rating;
DESCRIBE Films;
DESCRIBE Actor;

#_____________________________________________________
#VISUALIZAR TABELAS
#_____________________________________________________

SELECT * from Films;
SELECT * from Rating;
SELECT * from Actor;

#_____________________________________________________
### COMANDOS DE CRIAÇÃO DAS TABELAS.
#_____________________________________________________

CREATE TABLE MovieCast (
    movie_id INT(11),
    actor_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Films(id),
FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    Filme_id INT,
    FOREIGN KEY (Filme_id) REFERENCES Films(id)
);


CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

#_____________________________________________________
### INSERÇÃO DE DADOS DA TABELA ACTOR
#_____________________________________________________

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"001",
"Glória Pires",
120500,
"1963-08-23",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002",
"Renato Aragão",
102000,
"1920-02-18",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  140250,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Junio Batista da Silva",
  182000,
  "1993-06-16", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  119000.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006",
  "Tony Ramos",
  182000,
  "1965-06-16", 
  "male"
);

#_____________________________________________________
#INSERÇÃO DE DADOS TA TABELA RATING
#_____________________________________________________

INSERT INTO Rating (id, comment, rate, filme_id)
VALUES(
001,
"Muito engraçado, eles trocam de corpo!",
8,
1
);

INSERT INTO Rating (id, comment, rate, filme_id)
VALUES(
002,
"Amei a dona pituxa, é realmente um doce de mãe!",
7,
2
);

INSERT INTO Rating (id, comment, rate, filme_id)
VALUES(
003,
"Teste, estou criando uma avaliação com um foreign key inválida.",
7,
7
);

#_____________________________________________________
### INSERÇÃO DE DADOS DA TABELA MOVIECAST
#_____________________________________________________

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
1,
"006"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
1,
"001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
2,
"003"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
3,
"002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
3,
"005"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
3,
"004"
);

### USANDO INNER JOIN PARA TRAZER FILMES E SUAS AVALIAÇÕES.
SELECT * FROM Films 
INNER JOIN Rating ON Films.id = Rating.id;

#NAO FUNCIONOU :(
SELECT id, título, rate
FROM Films 
INNER JOIN Rating ON Films.id = Rating.id;
```