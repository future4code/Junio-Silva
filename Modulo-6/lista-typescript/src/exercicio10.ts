//função que recebe CPF 111.222.333.55

function TestaCPF(strCPF:string): boolean {

    let cpf: string = strCPF
    .replace(".","")
    .replace(".","")
    .replace("-","")
    
    let Soma:number = 0;
    let Resto:number;
    
    if (cpf == 
        "00000000000" || 
        "11111111111" || 
        "22222222222" ||
        "44444444444" ||
        "55555555555" ||
        "66666666666" ||
        "77777777777" ||
        "88888888888" ||
        "99999999999" 
        ) return false;

    for (let i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
}

console.log(TestaCPF("119.558.116-10"));
    



