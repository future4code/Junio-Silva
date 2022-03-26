const DataBaseClients = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
function ClientsAbleToLoan(lista) {
    const UpdatedClientsList = lista.map((client) => {
        let debits = 0;
        for (let i = 0; i < client.debitos.length - 1; i++) {
            debits += client.debitos[i];
        }
        client["saldoTotal"] = client.saldoTotal - debits;
        return client;
    });
    const ApprovedClientsList = UpdatedClientsList
        .filter((client) => {
        return client.saldoTotal < 0;
    });
    return ApprovedClientsList;
}
console.table(ClientsAbleToLoan(DataBaseClients));
//# sourceMappingURL=exercicio6.js.map