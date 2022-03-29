//EXERCICIO 9

// Escreva uma função que receba uma palavra (sem letras repetidas) e devolva a quantidade de anagramas que ela possui.

function QuantidadeAnagramas(palavra:string) : number {

    const quantidadeLetras: number = palavra.length
    let result : number = 1

    for (let i = quantidadeLetras; i > 0; i--) {
        result *= i
    }
    return result
}

//Funcionando!!
console.log(QuantidadeAnagramas("Abacate"))