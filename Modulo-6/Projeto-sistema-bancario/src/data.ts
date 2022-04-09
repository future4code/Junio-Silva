export const Errors: { [chave: string]: { status: number, message: string } } = {
    AUTHORIZATION_NOT_FOUND: { status: 401, message: "Você nao está autenticado." },
    USER_NOT_FOUND: { status: 404, message: "Não foi encontrado nenhum usuário com os dados informados." },
    USER_EXISTS: { status: 409, message: "Esse usuário já existe" },
    MISSING_PARAMETERS: { status: 422, message: "Verifique se está passando todas as informações necessárias" },
    SOMETHING_WENT_WRONG: { status: 500, message: "Ops, Algo deu errado." },
    BAD_REQUEST: { status: 400, message: "Requisição inválido" }
}

export type transaction = {
    service?: string;
    value: number
    date: string
    comment: string
}

export type user  = {
    name: string;
    cpf: number
    age: number
    balance: number
    BankStatement: Array<transaction>
}

export const userList : Array<user> = [

    { 
        name: "Joao Gonçalves Neto",
        cpf: 11987788552,
        age: 28,
        balance: 1500,
        BankStatement: []
    },
    {
        name: "Maria Adonilda Martins",
        cpf: 12281788530,
        age: 48,
        balance: 2500,
        BankStatement: []
    },
    {
        name: "Lucia Ferreira",
        cpf: 58214554151,
        age: 30,
        balance: 22000,
        BankStatement: []
    },
    {
        name: "Pablo Henrique Silva",
        cpf: 25876925489,
        age: 31,
        balance: 7500,
        BankStatement: []
    },
    {
        name: "Enzo Gabriel Monteiro",
        cpf: 25496358946,
        age: 18,
        balance: 1200,
        BankStatement: []
    }
]
