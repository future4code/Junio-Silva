let dataNascimento = Number(process.argv[2].substring(6, 10));
let dataEmissaoRG = Number(process.argv[3].substring(6, 10));
function checaRenovacao(dataNascimento, dataEmissaoRG) {
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - dataNascimento;
    let cond1 = idade <= 20 && anoAtual - dataEmissaoRG >= 5;
    let cond2 = (idade > 20 && idade <= 50) && (anoAtual - dataEmissaoRG >= 10);
    let cond3 = idade > 50 && anoAtual - dataEmissaoRG >= 15;
    return cond1 || cond2 || cond3;
}
console.log(checaRenovacao(dataNascimento, dataEmissaoRG));
//# sourceMappingURL=exercicio8.js.map