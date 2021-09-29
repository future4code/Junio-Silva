//===========================================//
//        EXERCICIOS  DE INTERPRETACAO       //
//===========================================//

//RESPOSTA1: é um loop  que vai somar numero a numero de 1 à 5, e ir atribuindo o resultado das somas a variavel "valor"
//RESPOSTA2: A) Será impresso no console todos os numeros que são maiores que 18
//           B) Sim, só o for.. of é suficiente.
//RESPOSTA 3: seriam impresso no console até a linha com 4 asteriscos.


//===========================================//
//     EXERCICIOS  DE ESCRITA DE CÓDIGOS     //
//===========================================//

//EXERCICIO 1: A) B) e C)

// let quantidadeDeAnimais = Number(prompt("Quantos animais você tem?"))
// let arrayDeAnimais = []

// if(quantidadeDeAnimais > 0) {
//     for(let minimo = 0; minimo < quantidadeDeAnimais; minimo++){
//     arrayDeAnimais.push(prompt('Digite o nome dos animais um de cada vez.'))
//     }
// } else{console.log("Que pena! Você pode adotar um pet!")}
// console.log(arrayDeAnimais)

//EXERCICIO 2
//EXERCICIO 2A)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// const funcaoDoarray = (array) => {
// for(let indexArray = 0; indexArray < arrayOriginal.length; indexArray +=1){
//     let indiceDavez = arrayOriginal[indexArray]
//     console.log(indiceDavez)
// }}
// console.log(funcaoDoarray(arrayOriginal))
//EXERCICIO 2B)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// const funcaoDoarray2 = (array) => {
// for(let indexArray of arrayOriginal){
//     console.log(indexArray/10)}}
//     console.log(funcaoDoarray2(arrayOriginal))


// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []
// const arrayDePares = (array) =>{
//     for(let numero of arrayOriginal){ 
//         if(numero%2 ===0){
//         novoArray.push(numero)}}
//     console.log(novoArray)}

// console.log(arrayDePares(arrayOriginal))

//EXERCICIO 2D)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let valorMaximo = 0
// let valorMinimo = Infinity

// const maiorNumeroEhMenorNumero = (numeros) => {
//     for (let numeroDaVez of numeros) {
//         if (numeroDaVez > valorMaximo) {
//             valorMaximo = numeroDaVez}
//         for (let numeroDaVez of numeros) {
//             if (numeroDaVez < valorMinimo) {
//                 valorMinimo = numeroDaVez
// }}}
// return (`O maior número é ${valorMaximo} e o menor número é ${valorMinimo}!`)
// }
// console.log(maiorNumeroEhMenorNumero(arrayOriginal));