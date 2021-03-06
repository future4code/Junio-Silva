// - Exercício 8
    
//     Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
    
//     - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
//     - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
//     - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

let dataNascimento:number = Number(process.argv[2].substring(6,10))
let dataEmissaoRG:number = Number(process.argv[3].substring(6,10))

function checaRenovacao(dataNascimento:number, dataEmissaoRG: number) : boolean {

    let anoAtual: number = new Date().getFullYear()
    let idade: number= anoAtual - dataNascimento

    //se true, tenho que renovar.
    let cond1:boolean = idade <= 20 && anoAtual - dataEmissaoRG >= 5 //se true, tenho que renovar.
    let cond2:boolean = (idade > 20 && idade <= 50) && (anoAtual - dataEmissaoRG >= 10)
    let cond3:boolean = idade > 50 && anoAtual - dataEmissaoRG >= 15

    return  cond1 || cond2 || cond3
}
//Funcionou Acho kkk
console.log(checaRenovacao(dataNascimento, dataEmissaoRG))