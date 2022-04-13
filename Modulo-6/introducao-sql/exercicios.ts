//EXERCICIO 1)
// a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
// RESPOSTA:
//VARCHAR(X) define que o campo receberá uma string de X caracteres.
//PRIMARY KEY É UM ID
//FLOAT especifica que pode receber um valor nao inteiro
//DATE data.
// NULL o campo pode nao ser prenchido
//NOT NULL o campo deve ser obrigatóriamente preenchido

// b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.
//SHOW DATABASES me meostrou qual o schema eu estou utilizando.
//SHOW TABLES mostra quais tabelas eu tenho no schema atual.

// c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.
//DESCRIBE Actor

// EXERCICIO 2)
// a) query que cria Gloria Pires criada!

// b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
// RESPOSTA: Código de erro 1062: Entrada duplicada "2" para key primary.Código de erro 1062: Entrada duplicada "2" para key primary.

// c) Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta
// ERRO1: fala que a contagem coluna não está dando match com a contagem de valores. 
//SOLUÇÃO1: Para arrumar o erro eu adicionei birth_date e gender na linha de colunas.

//d) ERRO2: fala que o campo 'name' nao tem um valor padrão
//SOLUÇÃO2: eu atribui um nome .

//d) ERRO3: fala que o valor do campo data está incorreto.
//SOLUÇÃO3: para concertar eu coloquei as aspas que estavam faltando