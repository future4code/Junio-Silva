function QuantidadeAnagramas(palavra) {
    const quantidadeLetras = palavra.length;
    let result = 1;
    for (let i = quantidadeLetras; i > 0; i--) {
        result *= i;
    }
    return result;
}
console.log(QuantidadeAnagramas("Abacate"));
//# sourceMappingURL=exercicio9.js.map