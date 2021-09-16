// // Exemplos

// // Exercício 0A
// function soma() {
//   // escreva seu código aqui
//   const num1 = prompt('Digite o primeiro número')
//   const num2 = prompt('Digite o segundo número')

//   console.log(Number(num1) + Number(num2))}

// // Exercício 0B
// function imprimeMensagem() {
//   // escreva seu código aqui
//   const mensagem = prompt('Digite sua mensagem')

//   console.log(mensagem)
// }

// // ---------------------------------------------------
// // Exercícios

// // Exercício 1
// function calculaAreaRetangulo() {
//   let altura = Number(prompt("Digite a Altura do retangulo."))
//   let largura = Number(prompt("Digite a Largura do retangulo."))
//   let area = altura * largura

// console.log(area)
// }

// // Exercício 2
// function imprimeIdade() {
//   let anoAtual = Number(prompt('Em que ano estamos?'))
//   let anoNascimento = Number(prompt('Em que ano você nasceu?'))
//   let idadeAtual = anoAtual - anoNascimento
// console.log(idadeAtual)
// }

// // Exercício 3
// function calculaIMC() {
//   let peso = Number(prompt('Quantos KGs você pesa?'))
//   let altura = Number(prompt('Qual sua altura?'))
//  let imc = peso / (altura * altura) 
//  console.log(imc)
// } 

// // Exercício 4
// function imprimeInformacoesUsuario() {
//   let nomeUsuario = prompt("Digite seu nome")
//   let idadeUsuario = Number(prompt('Digite a sua idade'))
//   let emailUsuario = prompt("Digite seu endereço de e-mail")
//   console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
  
// }

// // Exercício 5
// function imprimeTresCoresFavoritas() {
// let corUm = prompt('Digite a primeira cor favorita.')
// let corDois = prompt('Digite a segunda cor favorita.')
// let corTres = prompt('Digite a terceira cor favorita.')

// const listaDeCores = [corUm, corDois, corTres]
// console.log(listaDeCores)
// }

// // Exercício 6
// function retornaStringEmMaiuscula() {
//   let stringUsuario = prompt('Digite alguma coisa')

//   console.log(stringUsuario.toUpperCase())
// }

// // Exercício 7
// function calculaIngressosEspetaculo() {
//   custoTeatro = Number(prompt("Digite o custo total do teatro."))
//   valorIngresso = Number(prompt("Digite o valor de um ingresso."))
//   vendasNecessarias = custoTeatro / valorIngresso
//   console.log(vendasNecessarias)
// }

// // Exercício 8
// function checaStringsMesmoTamanho() {
//   let string1 = prompt('Digite uma palavra')
//   let string2 = prompt('Digite outra palavra')
// console.log(string1.length === string2.length) }

// // Exercício 9
// function checaIgualdadeDesconsiderandoCase() {
// let stringUm = prompt('Digite uma palavra')
// let stringDois = prompt('Digite outra palavra')
// let StringUmBaixa = stringUm.toLowerCase()
// let stringDoisBaixa = stringDois.toLowerCase()

// console.log(StringUmBaixa === stringDoisBaixa)
// }

// //Exercício 10
// function checaRenovacaoRG() { 
// let anoAtual = Number(prompt("Em que ano estamos?"))
// let anoNascimento = Number(prompt("Em que ano você nasceu?"))
// let validadeRG = Number(prompt("Até que ano é valido seu RG?"))
// let idade = anoAtual - anoNascimento
// let renova = anoAtual - validadeRG
// let fazerOutro = (idade <= 20 && renova > 4) || ((idade > 20 && idade < 50)&& renova >9) || (idade >=50 && renova >14)
// console.log(fazerOutro)
//   }

// // Exercício 11
// function checaAnoBissexto() {
// let anoBissexto = Number(prompt("Digite um ano"))
// let multiplo400 = (anoBissexto % 400) == 0
// let multiplo4 = (anoBissexto % 4 == 0) && anoBissexto % 100 != 0
// // let multiplo100 = (anoBissexto % 100) == 0
// let naoBissexto =  anoBissexto && multiplo400 && multiplo4 

// let resultado = (multiplo4 === 0 && multiplo100 === 0 && multiplo400 == 0)  
// console.log(naoBissexto || multiplo400 || multiplo4)
// } 


// // Exercício 12
// function checaValidadeInscricaoLabenu() {
// let idadeMaior18 = prompt('Você tem mais de 18 anos?')
// let ensinoMedio =  prompt('Você tem ensino médio completo?')
// let disponibilidade =  prompt('tem disponibilidade de horários?')
 
// resultadoInscrição = (idadeMaior18 === "sim" && ensinoMedio === "sim" && disponibilidade === "sim")
// console.log(resultadoInscrição)

// } 

//varialvel = [1,2,3,4,5]

function multiplicavarialvel(variavel) {
  return variavel*5
}

console.log(multiplicavarialvel(2))
console.log(multiplicavarialvel(10))