"use strict";
const checaRenovacaoRG = () => {
    const anoAtual = Number(process.argv[2]);
    const anoNascimento = Number(process.argv[3]);
    const anoEmissao = Number(process.argv[4]);
    let idade = anoAtual - anoNascimento;
    let tempoCarteira = anoAtual - anoEmissao;
    if (idade <= 20) {
        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos";
    }
    else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos";
    }
    else if (idade > 50) {
        return tempoCarteira >= 15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos";
    }
    else {
        return "error";
    }
};
console.log(checaRenovacaoRG());
//# sourceMappingURL=index5.js.map