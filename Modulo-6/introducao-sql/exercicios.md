# **EXERCÍCIOS DE INTRODUÇÃO EM  BANCO DE DADOS NO SQL**

**EXERCICIO 1A RESPOSTA:** 

```VARCHAR(X)``` define que o campo receberá uma string de X caracteres.

```PRIMATY KEY```  É UM ID

```FLOAT``` especifica que pode receber um valor nao inteiro

```DATE``` como o próprio nome já diz, uma data.

```NULL``` o campo pode nao ser prenchido

```NOT NULL``` o campo deve ser obrigatóriamente preenchido

**EXERCICIO 1B RESPOSTA:** 

```SHOW DATABASES``` me meostrou qual o schema eu estou utilizando.

```SHOW TABLES``` mostrou quais tabelas eu tenho no schema atual.

**EXERCICIO 1C RESPOSTA:** 

```DESCRIBE nome_tabela``` descreve quais os ítens e valores que a tabela recebe.
**EXERCICIO 1 RESPOSTA:** 
```sql
#CRIANDO TABELA
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
**EXERCICIO 2A RESPOSTA:** 
```
---
**EXERCICIO 2A RESPOSTA:** 
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
002,
"Glória Pires",
1200000,
"1963-08-23",
"fem"
);

```
**EXERCICIO 2B RESPOSTA:** 

```Código de erro 1062:``` Entrada duplicada "2" para key primary.
Houve esse erro poque eu tentei adicionar um ítem com ID já existente.

```sql
#TENTANDO INSERIR UM ATOR COM UM ID JÁ EXISTENTE
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
002,
"RENATO ARAGÃO",
300000,
"1920-02-18",
"masc"
);
```
---
**EXERCICIO 2C RESPOSTA:** 


*ERRO1:* fala que a contagem coluna não está dando match com a contagem de valores.
*SOLUÇÃO1:* Para arrumar o erro eu adicionei birth_date e gender na linha de colunas.
```sql
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
**EXERCICIO 2D RESPOSTA:** 

*ERRO2:* fala que o campo 'name' nao tem um valor padrão

*SOLUÇÃO2:* eu atribui um nome .
```sql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
**EXERCICIO 2E RESPOSTA:** 

*ERRO3:* fala que o valor do campo data está incorreto.
*SOLUÇÃO3:* para concertar eu coloquei as aspas que estavam faltando
```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```
---
**EXERCICIO 3A RESPOSTA:** 
```SQL
# Escreva uma query que retorne todas as informações das atrizes

SELECT id, name, salary, birth_date, gender 
FROM Actor 
WHERE gender = "female" OR gender = "fem";
```

**EXERCICIO 3B RESPOSTA:** 
```SQL
# Escreva uma query que retorne o salário do ator com o nome Tony Ramos

SELECT salary 
FROM Actor 
WHERE name = "Tony Ramos";
```

**EXERCICIO 3C RESPOSTA:** 

*RESPOSTA:* a query funciona, mas nao existe ninguem com gender "invalid"
```SQL
SELECT id, name, salary, birth_date, gender 
FROM  Actor 
WHERE gender = "invalid";
```

**EXERCICIO 3D RESPOSTA:** 
```SQL
SELECT id, name, salary 
FROM Actor 
WHERE salary  <= 500000;
```

**EXERCICIO 3E RESPOSTA:** 

Explicando o erro: nao existe a coluna NOME na tabela, o correto é NAME em ingles.
```SQL
SELECT id, name 
FROM Actor 
WHERE id = "002";
```
---

**EXERCICIO 4A RESPOSTA:** 

Procura na tabela pessoas que tenham nome comçado com a letra A ou J por causa LIKE com uso %, e que tenham salario maior que 300000 e retorna todas as informações dessa pessoa (SELECT *) 
```SQL
SELECT * 
FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```

**EXERCICIO 4B RESPOSTA:** 
```SQL
SELECT * 
FROM Actor
WHERE name NOT LIKE "A%" AND salary >= 350000;
```
**EXERCICIO 4C RESPOSTA:** 

```SQL
SELECT * 
FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";
```
**EXERCICIO 4D RESPOSTA:** 

```SQL
SELECT * 
FROM Actor
WHERE  (
    name LIKE "%A%" OR name LIKE "%a%" 
    OR name LIKE "%G%" OR name LIKE "%g%") 
AND salary BETWEEN 350000 AND 900000 ;
```
---
**EXERCICIO 5A RESPOSTA:** 

```SQL
CREATE TABLE Films(
id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
título VARCHAR(250) NOT NULL UNIQUE,
Sinopse TEXT NOT NULL,
data_lançamento DATE NOT NULL,
avaliacao INT NOT NULL
);

```
**EXERCICIO 5B RESPOSTA:** 
```SQL
INSERT INTO Films (id, título, sinopse, data_lançamento, avaliacao)
VALUES(
001,
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/01/06",
7
);
```
**EXERCICIO 5C RESPOSTA:** 
```SQL
INSERT INTO Films (id, título, sinopse, data_lançamento, avaliacao)
VALUES(
002,
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
10
);
```
**EXERCICIO 5D RESPOSTA:** 

```SQL
INSERT INTO Films (id, título, sinopse, data_lançamento, avaliacao)
VALUES(
003,
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
8
);
```

**EXERCICIO 5E RESPOSTA:** 
```SQL
INSERT INTO Films (id, título, sinopse, data_lançamento, avaliacao) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```
**EXERCICIO 6A RESPOSTA:** 

```SQL
SELECT id, título, avaliacao 
FROM Films
WHERE id = 3;
```
**EXERCICIO 6B RESPOSTA:** 

```SQL
SELECT id, título, avaliacao 
FROM Films
WHERE título = "Deus é Brasileiro";
```
**EXERCICIO 6C RESPOSTA:** 

```SQL
SELECT id, título, sinopse 
FROM Films
WHERE avaliacao >= 7 ;
```
---
**EXERCICIO 7A RESPOSTA:** 

```SQL
SELECT *
FROM Films
WHERE título OR sinopse LIKE "%vida%";
```
**EXERCICIO 7B RESPOSTA:** 

```SQL
SELECT * FROM Films
WHERE (título 
LIKE "%mãe%" 
OR sinopse 
LIKE "%mãe%");
```
**EXERCICIO 7C RESPOSTA:** 

```SQL
SELECT * 
FROM Films
WHERE data_lançamento < "2021-04-12";
```

**EXERCICIO 7D RESPOSTA:** 

```SQL
SELECT * 
FROM Films
WHERE data_lançamento < "2021-04-12"
AND (título like "%Deus%" OR sinopse like "%Deus%")
AND avaliacao >  7
```


# ANOTATIONS:
```SQL
#Ver tabela, testar coisas
select * from Films;

# BUSCANDO UM ÍTEM SEGUINTE CRITÉRIOS
SELECT id, name 
FROM Actor 
WHERE gender = "male";

# APAGAR TABELA
DROP TABLE nome_tabela;

# MOSTRA SCHEMA 
SHOW DATABASES;

# MOSTRA TABELAS
SHOW TABLES;

#SELECIONANDO VALORES
SELECT * FROM Actor;

``` 