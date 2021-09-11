//EXERCICIO 1 (DECLARAR E IMPRIMIR VARIAVEIS)
let seuNome
let suaIdade
console.log(typeof seuNome) // Typeof undefined por que eu nao atribui a ela nenhum valor ainda.
console.log(typeof suaIdade) // Typeof undefined por que eu nao atribui a ela nenhum valor ainda.
seuNome = prompt('Digite seu nome')
suaIdade = prompt('Digite sua idade')
console.log(typeof seuNome) // Typeof string por que o valor veio de um prompt.
console.log(typeof suaIdade) // Typeof string por que o valor veio de um prompt.    
console.log(seuNome) 
console.log(suaIdade) 
console.log ("Olá,", seuNome, ". Você tem" ,suaIdade ,"anos!")

// EXERCICIO 2 (PERGUNTAS SIM OU NAO)
let temTrabalho
let temCarro
let temCasa

temTrabalho = prompt('Você mora no Brasil?')
temCarro = prompt('você está trabalhando atualmente?')
temCasa = prompt('você tem casa propria?')

respostaTrabalho = temTrabalho
respostaCasa = temCasa
respostaCarro = temCarro

console.log("Você está trabalhando atualmente?", respostaTrabalho)
console.log('você tem um carro?',respostaCarro)
console.log('você tem casa?', respostaCasa)

// EXERCICIO 3 (ALTERAR VALORES DAS VARIAVEIS)
let a = 10
let b = 25
let c

c = a 
a = b
b = c
c = null

console.log(a , b) /*dessa forma troquei os valores e depois deixei a 
variavel C sem valor algum.*/
