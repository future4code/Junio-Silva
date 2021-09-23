// EXERCICIOS DE INTERPRETAÇÃO
// EXERCICIO 1 A) sao 3 console.log's:
// o prmeiro vai retornar o primeiro índice do elenco que está dentro do objeto filme: "Matheus Nachtergaele"
// o segundo vai retornar o último índice do elenco que está dentro do objeto filme: "Virginia Cavendish"
// o terceiro vai retornar o terceiro índice de transmissoesHoje que está dentro do objeto filme: {canal: "Globo", horario: "14h"}

// EXERCICIO 2 A) O que vai ser impresso no console? B) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// São tres console log's:
// O primeiro vai imprimir o objeto "cachorro".
// O segundo imprime o objeto criado de nome "Gato" que com o spread puxa todas as informações do objeto "cachorro" e troca o nome para Juba
// O terceiro imprime o objeto tartaruga que o spread puxa todas as informações do objeto "gato" e com o replaceAll troca todas as letras A por O na propriedade nome, ficando então Jubo.

// EXERCICIO 3
// a) O que vai ser impresso no console?
// No primeiro console log, será impresso o valor da propriedade backender que está dentro do objeto pessoa, que será o false. 
// No segundo console log, creio que vai ser "undefined" 

// B) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// foi criada uma função, que retorna o valor da propriedade de um objeto. assim como acentece no primeiro console.log. 
// o segundo console.log retorna 'undefined' porque quando a funcao é chamada, ela busca dentro do objeto 'pessoa' e nao encontra uma propriedade com o nome "altura". 
// __________________________________________________________________________________

// EXERCICIOS DE ESCRITA DE CÓDIGOS

//EXERCICIO 1A:
const apresentacao = {
    nome: "Joao Lucas",
    apelidos: [ " Joaozinho", " Luquinha" , " Juca" ]
}

function fraseDeApresentacao(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`)
}
console.log(fraseDeApresentacao(apresentacao))


//EXERCICIO 1B:
const  novosApelidos = {
    ...apresentacao,
    apelidos: [ " Joaozera", " Lucão", " Jucao" ] //Joaozinho cresceu e engordou, já nao gosta mais de seus apelidos de criança. 
}

console.log(fraseDeApresentacao(novosApelidos))

//EXERCICIO 2:
//EXERCICIO 2A:
const perfilPessoa1 = {
    nome: "Joao" ,
    idade: 32,
    profissao: "Carpinteiro"
}

const perfilPessoa2 = {
    nome: "Marcelo" ,
    idade: 21,
    profissao: "Vendedor"
}
//EXERCICIO 2B:
 function arrayPerfil(objeto) {
    let arrayDoPerfil = [objeto.nome , objeto.nome.length , objeto.idade , objeto.profissao , objeto.profissao.length]
  return arrayDoPerfil
 }

 //testes
 console.log(arrayPerfil(perfilPessoa1))
 console.log(arrayPerfil(perfilPessoa2))

 //EXERCICIO 3
 //EXERCICIO 3A:
const carrinho = []

//  //EXERCICIO 3B
let fruta1 = { nome: "Maçã", disponibilidade: true}
let fruta2 = { nome: "Banana", disponibilidade: true}
let fruta3 = { nome: "Morango", disponibilidade: true}

//  //EXERCICIO 3C:
function AdicionarAoCarrinho(objeto) {
 carrinho.push(objeto)
}

AdicionarAoCarrinho(fruta1)
AdicionarAoCarrinho(fruta2)
AdicionarAoCarrinho(fruta3)

//  //EXERCICIO 3D:
console.log(carrinho)
