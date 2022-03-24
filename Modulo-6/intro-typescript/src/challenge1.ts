// Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:

// a) A soma desses números

// b) A subtração desses números

// c) A multiplicação desses números

// d) Qual deles é o maior

// Você pode fazer todas as operações na mesma função.

// Como estamos usando o TypeScript, devemos passar para o código o tipo de parâmetro que é esperado pela função, afinal, no javascript, nada nos impede de passar parâmetros sem especificação. É como diz aquela piada de programador:

let num1: number = Number(process.argv[2])
let num2: number = Number(process.argv[3])

const comparaNums: (num1: number, num2:number) => void = (num1, num2) => {

    let maiorNumero: number 
    if(num1 > num2){
        maiorNumero = num1
    }else{
        maiorNumero = num2
    }

    console.log('O resultado da soma dos dois numeros é:  ', num1+num2)
    console.log('O resultado da subtração dos dois numeros é:  ', num1-num2)
    console.log('O resultado da multiplicação dos dois numeros é:  ', num1*num2)
    console.log('O maior dos dois numeros é:  ', num1*num2)

}