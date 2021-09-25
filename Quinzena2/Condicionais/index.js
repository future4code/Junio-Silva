//==============================================//
//        EXERCICIOS DE INTERPRETAÇÃO           //
//==============================================//

/*RESPOSTA1:
A) o código testa se a divisão do numero por zero tem resto 0, 
exibindo uma mensagem para cada situação de true or false.
B) imprime "Passou no teste" para os numeros que tem resto 0 na divisão por 2.
C) imprime "Nao passou no teste" para os numeros que nao tem resto 0 na divisão por 2.*/

/*RESPOSTA2:
A) O código serve para mostrar ao usuário o preço da fruta de no qual ele digitou no prompt.
B) será impresso: "O preço da fruta maçã,é R$ 2,25"
C) sei que o "break" faz o algoritimo terminar uma case, pular pra proxima... 
tirando aquele break em especifico, o console mostrou o preço da propriedade default.
(nao entendi o porque, já que o 5,50 vinha primeiro. :/ )
*/

/*RESPOSTA3:
A) A primeira linha está declarando uma variavel que terá o valor de um número 
que será digitado pelo usuário via prompt
B) Se o usuário digitar o numero 10, o resultado será True, então será impresso no console 
a seguinte mensagem: "Esse número passou no teste". Se o numero digitado fosse o -10, nao aconteceria nada.
C) Haveria erro sim, pois a variavel mensagem, foi declarada dentro do escopo da função, 
portanto ela nao poderia ser chamada no escopo global. */

//==============================================//
//      EXERCICIOS DE ESCRITA DE CÓDIGOS        //
//==============================================//

//RESPOSTA1:
/*A e B)*/ const idadeUsuario = Number(prompt("Digite sua Idade"))

/*C)*/ 
function podeOuNaoDirigir(idadeUsuario){
if (idadeUsuario >= 18) {
     console.log("Você pode dirigir")
}else{
   console.log("Você nao pode dirigir") }
}
//testes
console.log(podeOuNaoDirigir(17))
console.log(podeOuNaoDirigir(18))
console.log(podeOuNaoDirigir(19))

RESPOSTA2:
let turnoDoAluno = prompt("Em que turno você estuda?? Digite: M para Matutino, V para Vespertino, ou N para Noturno")

function saudacao(turno){
    if (turno === "M"){
        console.log("Bom dia!") }
    else if (turno==="V") {
        console.log("Boa tarde!")
    }else{ console.log("Boa Noite!")}
}
saudacao(turnoDoAluno)

//RESPOSTA3:
let turnoDoAluno2 = prompt("Em que turno você estuda?? Digite: M para Matutino, V para Vespertino, ou N para Noturno")
function saudacao2(turnoDoAluno2){
    switch(turnoDoAluno2) {
        case "M":
        console.log("Bom dia!")
        break
        case "V":
        console.log("Boa Tarde!")
        break        
        case "N":
        console.log("Boa Noite!")
        break
        default:
        console.log("Nao encontramos seu turno, tente novamente com as iniciais M, V ou N!")}
        break
}
saudacao2(turnoDoAluno2)

//RESPOSTA4:

let generoFilme = prompt('Qual genero de filme vamos assistir')
let preçoIngresso = Number(prompt('Qual o preço do ingresso'))

function verFilmeOuNao(genero , preço){
    if((genero === "fantasia") && (preço <= 15) ) {
    console.log('Bom Filme!') 
    }else{console.log("Escolha outro filme :(")}}

verFilmeOuNao(generoFilme, preçoIngresso)
