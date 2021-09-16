//EXERCICIOS DE INTERPRETAÇÃO
// RESPOSTA1: A função pega os valores que recebe de imput(no caso 2 e 10) e mulplica por 5.
//Não retorna, apenas imprime no console.

// RESPOSTA2: 
//A) A função pede ao usuario que digite uma frase, depois converte tudo para caixa baixa
//e pesquisa se dentro da frase existe a palavra "cenoura".
/*B) I retornará True, 
II  retornará True, 
III  retornará False*/


//EXERCICIOS DE ESCRITA DE CÓDIGOS
//RESPOSTA 1A:
function minhasInfo() {
console.log(' Eu sou Junio, tenho 27 anos, moro em Minas Gerais e sou estudante')
}
minhasInfo()

//RESPOSTA 1B:
function minhasinfo2(nome, idade, endereço, profissao) {
    return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao}.`)
}
console.log(minhasinfo2("Junio", 27, "Minas Gerais", "estudante"))



//FALTA RESPOSTA 2 AQUI
//A) 
function soma(n1,n2) {
    let resultado = n1 + n2
    console.log(resultado)
}
soma(12,12)

//B)
function comparaDoisNumeros(num1, num2) {
let resultado = num1 >= num2
console.log(resultado)
}
comparaDoisNumeros(20,22)

//C:
function parOuNao(numero) {
resultado = (numero % 2) === 0

console.log(resultado)
}
//teste
parOuNao(12)
parOuNao(5)
parOuNao(1)
parOuNao(2)

//RESPOSTA3: 
function calculoDoisNumeros(n1,n2) {
let soma = n1 + n2
let subtracao = n1 - n2
let mulplicacao = n1 * n2
let divisao = n1 / n2
console.log(soma, subtracao, divisao, mulplicacao)
}
let numeroUsuario1 = Number(prompt('Digite um numero'))
let numeroUsuario2 = Number(prompt('Digite outro numero'))

calculoDoisNumeros(numeroUsuario1,numeroUsuario2)
