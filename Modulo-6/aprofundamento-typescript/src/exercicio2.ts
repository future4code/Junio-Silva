//a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
//c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas.

type amostraDeDados = {
    maior: number
    menor: number
    media: number
}

const ramdomNumbers: Array<number>  = [10,12,15,18,22,35,48]

function obterEstatisticas(numeros: number[]): amostraDeDados {

    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: amostraDeDados = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


//FUNCIONANDO :D
console.log(obterEstatisticas(ramdomNumbers))