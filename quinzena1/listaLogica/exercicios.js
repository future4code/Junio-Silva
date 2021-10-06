// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  let Altura = Number(prompt("Digite a Altura do retangulo."))
  let largura = Number(prompt("Digite a Largura do retangulo."))
  let area = altura * largura

Console.log(area)
}

// Exercício 2
function imprimeIdade() {
  let anoAtual = Number(prompt('Em que ano estamos?'))
  let anoNascimento = Number(prompt('Em que ano você nasceu?'))
  let idadeAtual = anoAtual - anoNascimento
Console.log(idadeAtual)
}

// Exercício 3
function calculaIMC() {
  let peso = Number(prompt('Quantos KGs você pesa?'))
  let altura = Number(prompt('Qual sua altura?'))
 let imc = peso / (altura * altura) 
 console.log(imc)
} 

// Exercício 4
function imprimeInformacoesUsuario() {
  let nomeUsuario = prompt("Digite seu nome")
  let idadeUsuario = Number(prompt('Digite a sua idade'))
  let emailUsuario = prompt("Digite seu endereço de e-mail")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
  
}

// Exercício 5
function imprimeTresCoresFavoritas() {
let corUm = prompt('Digite a primeira cor favorita.')
let corDois = prompt('Digite a segunda cor favorita.')
let corTres = prompt('Digite a terceira cor favorita.')

const listaDeCores = [corUm, corDois, corTres]
console.log(listaDeCores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  let stringUsuario = prompt('Digite alguma coisa')

  console.log(stringUsuario.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  custoTeatro = Number(prompt("Digite o custo total do teatro."))
  valorIngresso = Number(prompt("Digite o valor de um ingresso."))
  vendasNecessarias = custoTeatro / valorIngresso
  console.log(vendasNecessarias)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let string1 = prompt('Digite uma palavra')
  let string2 = prompt('Digite outra palavra')
console.log(string1.length === string2.length) }

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
let stringUm = prompt('Digite uma palavra')
let stringDois = prompt('Digite outra palavra')
let StringUmBaixa = stringUm.toLowerCase()
let stringDoisBaixa = stringDois.toLowerCase()

console.log(StringUmBaixa === stringDoisBaixa)
}

Exercício 10
function checaRenovacaoRG() {
let anoAtual = Number('Em que ano estamos.') //2021
let anoNascimento = Number('Digite seu ano de nascimento')//1993
let ExpedicaoRg = Number('Digite data da emissao do seu RG')//2014

let idade = anoAtual - anoNascimento
let validadeRg = ExpedicaoRg - anoAtual
console.log(idade)
console.log(validadeRg)
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}