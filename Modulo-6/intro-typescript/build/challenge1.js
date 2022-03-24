"use strict";
let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);
const comparaNums = (num1, num2) => {
    let maiorNumero;
    if (num1 > num2) {
        maiorNumero = num1;
    }
    else {
        maiorNumero = num2;
    }
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    console.log(`${num1} x ${num2} = ${num1 * num2}`);
    console.log('O maior dos dois numeros é: ', maiorNumero);
};
console.log(comparaNums(num1, num2));
//# sourceMappingURL=challenge1.js.map