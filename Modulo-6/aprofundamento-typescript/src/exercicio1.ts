// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
// RESPOSTA: Da um erro falando que eu nao posso atribuir o valor por se tratar de um number.

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
// RESPOSTA: É possivel atribuir mais de um tipo usando o pipe (exemplo const meuNumero: number | string  = "oi")

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

type pessoa = {
    nome: string, 
    idade: number, 
    corFavorita: string
}

enum CoresArcoIris {
    VERMELHO = "vermelha",
    LARANJA = "laranja",
    AMARELO = "amarelO",
    VERDE = "verde",
    AZUL = "azul", 
    VIOLETA  = "violeta"
}

const primeiraPessoa: pessoa = {
    nome: "Junio", 
    idade: 28,
    corFavorita: CoresArcoIris.VIOLETA
 }

 const segundaPessoa: pessoa = {
    nome: "Laura", 
    idade: 30,
    corFavorita: CoresArcoIris.AMARELO
 }

 const TerceiraPessoa: pessoa = {
    nome: "Maria", 
    idade: 159,
    corFavorita: CoresArcoIris.VERDE
 }