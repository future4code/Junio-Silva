const productsList = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];
function updateProductList(products) {
    let newlist = products.map((product) => {
        const ajustaPreco = (preco) => {
            const valorAjustado = preco.toFixed(2).replace('.', ',');
            return "R$ " + valorAjustado;
        };
        product["valorUnitario"] = ajustaPreco(product.valorUnitario);
        return product;
    });
    let orderedList = newlist.sort((a, b) => { return b.quantidade - a.quantidade; });
    return orderedList;
}
console.table(updateProductList(productsList));
//# sourceMappingURL=exercicio7.js.map