// //EXERCICIOS DE INTERPRETAÇÃO

// // //EXERCICIO 1: 
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2 //  false
// resultado = bool1 && bool2 && bool3 //false
// resultado = !resultado && (bool1 || bool2) //true
// console.log("d. ", typeof resultado) //boolean (2 opçoes, sim ou nao.)

// // EXERCICIOS 2 E 3:
/*o codigo dele estava dando errado porq que ele nao converteu as strings 
que vieram do prompt para number. O correto seria:*/
 let primeiroNumero = prompt("Digite um numero!")
 let segundoNumero = prompt("Digite outro numero!")

 const soma = Number(primeiroNumero) + Number(segundoNumero)
 console.log(soma)

//EXERCICIOS DE DIGITAÇÃO DE CÓDIGOS
//EXERCICIO 1:
let idade1 = Number (prompt('Qual a sua idade?'))
let idade2 = Number (prompt('Qual a idade do seu melhor amigo?'))
let diferencaIdade = idade1 - idade2
console.log("Sua idade é maior do que a do seu melhor amigo?" ,idade1 > idade2)
console.log("A diferença de idade entre vocês e de" ,diferencaIdade, "anos")

// //EXERCICIO 2:
const numeroPar = Number( prompt('Digite um numero Par'))
console.log( numeroPar % 2) /*O padrao é que todos os resultados para numeros pares é 0. 
Se por um acaso alguem colocar um numero impar o resultado nao vai ser zero, e sim a sobra da divisão, 
Ex: 21/2 =10 e sobra 1  (Esse valor 1, será exibido no console.)*/

//EXERCICIO 3:
const idadeAnos = Number (prompt('qual a sua idade?'))

let ano = 12
let mes = 30
let dia = 24

let idadeMeses = ano * idadeAnos
let idadeDias = idadeMeses * mes
let idadeHoras = idadeDias * dia

console.log("Sua idade:" ,idadeAnos) 
console.log("Sua idade em meses:" ,idadeMeses)
console.log("Sua idade em dias:" ,idadeDias)
console.log("Sua idade em horas" ,idadeHoras)
 
//EXERCICIO 4:
const numero1 = Number (prompt("Digite um Número:"))
const numero2 = Number (prompt("Digite outro Número:"))

let restoDivisao1 = (numero1 % numero2) 
let restoDivisao2 = (numero2 % numero1) 

console.log("O primeiro numero é maior que segundo?" ,numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?" ,numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", restoDivisao1 === 0)
console.log("O segundo numero é divisível pelo primeiro?", restoDivisao2 === 0)

