//EXERCICIO 4
// Considerando o array, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este arraycomo parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente. 

type colaborador = {
    nome: string, 
    salário: number, 
    setor: string,
    presencial: boolean
}

enum SETOR {
MARKETING = 'marketing',
VENDAS = 'vendas',
FINANCEIRO  = 'financeiro'
}

const funcionarios: Array<colaborador>  = 
[
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

function employeeFilter(employees: Array<colaborador>) : Array<colaborador> {
    return employees.filter((item) => {return item.setor  === SETOR.MARKETING && item.presencial === true})
}

console.table(employeeFilter(funcionarios))