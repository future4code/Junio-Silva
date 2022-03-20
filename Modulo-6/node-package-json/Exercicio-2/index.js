//EXERCICIO 2
//Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const calculateParams = (mathOperation, number1, number2) => {
    
    switch (mathOperation) {
        case 'add': 
            console.log(`A soma destes numeros resulta em: ${number1+number2}`)
        break;

        case 'sub': 
             console.log(`A subtração destes numeros resulta em: ${number1+number2}`) 
        break;

        case 'div': 
             console.log(`A divisão destes numeros resulta em: ${number1/number2}`) 
        break;

        case 'mult': 
             console.log(`A multiplicação destes numeros resulta em: ${number1*number2}`) 
        break;

        default: 
        return console.log("Operação matemática nao encontrada")
    }
}

const [mathOp, fistNumber, secondNumber ] = [
    process.argv[2], 
    Number(process.argv[3]), 
    Number(process.argv[4]) ]

calculateParams(mathOp, fistNumber, secondNumber)