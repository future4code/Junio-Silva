//EXERCICIO 6
// Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo cliente. Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos. Dessa forma, a sua tarefa é criar uma função que receba este array como parâmetro, atualize o saldo total descontando todos os débitos e retorne apenas os clientes com saldo negativo.

type clientBalance = {cliente: string, saldoTotal: number, debitos: Array<number>}

const DataBaseClients: Array<clientBalance>  = 
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] }, //nao
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] }, //nao
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] }, //sim
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] }, //sim
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] }, //nao
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] } //nao
]

function ClientsAbleToLoan (lista: Array<clientBalance> ): Array<clientBalance> {

    
    const UpdatedClientsList: Array<clientBalance> = lista.map((client)=>{
        let debits:number = 0;
        
        for(let i = 0; i < client.debitos.length-1; i++) {
            debits += client.debitos[i]; 
        }
         client["saldoTotal"] = client.saldoTotal-debits; 
         return client
    })


    const ApprovedClientsList : Array<clientBalance> = UpdatedClientsList
    .filter((client)=> {
        return client.saldoTotal < 0
    })

return ApprovedClientsList
}

// FUNCIONANDO! ;DD
console.table(ClientsAbleToLoan(DataBaseClients))