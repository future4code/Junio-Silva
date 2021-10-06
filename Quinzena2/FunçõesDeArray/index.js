//==============================
// EXERCICIOS DE INTERPRETAÇÃO
//==============================

//1A) Esse exercicio me deu uma bugada, por que eu nao entendi direito qual alteração o metodo map está fazendo, 
//pelo que entendi vai ser impresso no console o nome e o tipo de cada item junto com o array completo para cada indice do array original.

//2A) o map vai filtrar e criar um novo array apenas com as propriedades de nomes tirando-as do array de objetos original.

//3A) o filter vai filtrar de dentro do array de objetos todos os apelidos que sao diferentes de chijo, e retornar em um novo array.

//==============================
// EXERCICIOS DE ESCRITA
//==============================

//EXERCICIO 1:
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
//RESPOSTA 1A)
let novoArrayPets = pets.map((item, index, array) => {
    return item.nome})
    console.log(novoArrayPets)

//RESPOSTA 1B)
arrayPetSalsicha = pets.filter((array) => {
    return array.raca === "Salsicha"})

    console.log(arrayPetSalsicha)


    //RESPOSTA 1C)

const separaPoodles = (item) => {
    return item.raca === "Poodle"
}

const arrayPoodles = pets.filter(separaPoodles)
const mensagem = (item) => {
    console.log("Você ganhou um cupom de desconto de 10% para tosar o/a " ,item.nome,"!")
}

const nomeDosPoodles = arrayPoodles.map(mensagem)


//EXERCICIO 2:
const produtos = [
{ nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
{ nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
{ nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
{ nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
{ nome: "Leite", categoria: "Bebidas", preco: 2.99 },
{ nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
{ nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
{ nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
{ nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
{ nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }]

//RESPOSTA2 A)
let arrayDeNomes = produtos.map((item) => {
    return item.nome
})

teste
console.log(arrayDeNomes)

//RESPOSTA2 B)



//RESPOSTA2 C)
const arrayBebidas = produtos.filter((array) => {
    return array.categoria === "Bebidas"})

console.log(arrayBebidas)