export type transaction = {
    service: string;
    data: string
}

export type user  = {
    nome: string;
    cpf: number
    idade: number
    saldo: number
    extrato: Array<transaction>
}

export const userList : Array<user> = [

    { 
        nome: "Joao Gonçalves Neto",
        cpf: 11987788552,
        idade: 28,
        saldo: 1500,
        extrato: []
    },
    {
        nome: "Maria Adonilda Martins",
        cpf: 12281788530,
        idade: 48,
        saldo: 2500,
        extrato: []
    },
    {
        nome: "Lucia Ferreira",
        cpf: 58214554151,
        idade: 30,
        saldo: 22000,
        extrato: []
    },
    {
        nome: "Pablo Henrique Silva",
        cpf: 25876925489,
        idade: 31,
        saldo: 7500,
        extrato: []
    },
    {
        nome: "Enzo Grabriel Monteiro",
        cpf: 25496358946,
        idade: 18,
        saldo: 1200,
        extrato: []
    }
]