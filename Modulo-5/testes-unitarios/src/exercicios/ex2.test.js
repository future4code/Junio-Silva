import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {

  test("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  test("retorna true para 'arara' ", () => {

    const palindromo = checaPalindromo("arara");
    expect(palindromo).toBe(true)

  })

  test("retorna true para 'asa'", () => {
    //testei de uma forma diferente :D
    const palindromo = checaPalindromo("asa")
    expect(palindromo).not.toBe(false)

  })

  test("retorna false para 'Socorram-me subi no onibus em marrocos'", () => {

    const palindromo = checaPalindromo("Socorram-me subi no onibus em marrocos")
    //como contém um hífem na frase, isso faz ela  retonar um false mesmo tendo as mesmas letras de traz pra frente. Trocando o hifen por espaço, retornaria true.

    expect(palindromo).toBe(false)

  })

});
