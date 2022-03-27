// EXERCICIO 7

// Aproveitando a função já feita, faça uma nova função que receba o arrayde estoque como parâmetro, use a função ajustaPreco para corrigir os preços e retorne a lista de estoque ordenada pela quantidade de cada produto.

type product = {
    nome: string,
    quantidade: number,
    valorUnitario: any
}

const productsList : Array<product>  =
[
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function updateProductList (products: Array<product>): any {

    let newlist : Array<product> = products.map((product)=> {
        const ajustaPreco = (preco :number): string => {
            const valorAjustado: string = preco.toFixed(2).replace('.', ',')
            return "R$ "+valorAjustado
        }

        product["valorUnitario"] = ajustaPreco(product.valorUnitario)
        return product
    })

    let orderedList: Array<product> = newlist.sort((a,b)=>{return b.quantidade-a.quantidade})

    return orderedList 
}

console.table(updateProductList(productsList))






