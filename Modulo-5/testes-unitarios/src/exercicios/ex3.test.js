import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {

 test(" retornará true para este array com itens duplicados ", () => {
    const array = ["a", "a", "b", "c"]
    const resultado = checaItensDuplicados(array)
    expect(resultado).toBe(true)
 })

 test(" retornará true para este array com itens duplicados ", () => {
    const array = [5, 5, 3, 6, 5, 6]
    const resultado = checaItensDuplicados(array)
    expect(resultado).toBe(true)
})

test(" retornará true para este array com itens duplicados ", () => {
    const array = ["f", "d", "e", "f"]
    const resultado = checaItensDuplicados(array)
    expect(resultado).toBe(true)
})

test(" retornará false para este array que nao tem itens duplicados ", () => {
    
    const array = [1, 2, 3]
    const resultado = checaItensDuplicados(array)
    expect(resultado).toBe(false)
})

});





