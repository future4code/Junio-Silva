//EXERCÍCIOS DE INTERPRETAÇÃO
/* Resposta 1:
 1A) irá retornar "a." undefined porque pediu pra imprimir o texto
e a variavel que até o momento nao tem nenhum valor atribuido.*/

//1B) imprime o texto "b." e o seu valor que no caso é null.

//1C) length é usado para imprimir o tamanho do array, que caso é 11.

//1D) aqui é atribuido 0 como valor da variavel I, 
// depois pede pra imprimir no console a ´posicao I (0),
// que retorna o primeiro ítem do array.

//1E) aqui trocam o I+1(a segunda posição no array) por 19. 
//ficando array 3,19,5,6,7,8,9,10,11,12,13

//1E) atribui a posição I+6(setima posição)a variavel valor. sendo assim, valor = 9.

//Resposta2: 
// Será impresso no console toda a frase em caixa alta (toUpperCase), 
// Todas as letras "A" serao substituidas por "i"  (replaceAll)
// será impresso a quanidade de caracteres (lenght)
// o retorno do codigo será: "SUBI NO ONIBUS EM MIRROCOS 26"

//_________________________________________________________________________________________
//EXERCICIOS DE CÓDIGOS.

//Resposta1:
const eMail = prompt('Digite seu e-mail')
const nome = prompt('Digite seu nome ')

console.log(`O e-mail ${eMail} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)

Resposta2:
//A
let comidas = ["pastel","pizza","chocolate","caqui","lasanha"]
console.log(comidas)

//B
console.log("Essas são as minhas comidas preferidas")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

//C
let comidaPreferida = prompt("Qual sua comida preferida?")
comidas[0+1]=comidaPreferida
console.log(comidas)

//_________________________________________________________________________________________
//Resposta3:
/*A)*/let listaDeTarefas = []
/*B)*/listaDeTarefas.push(prompt('Digite a primeira tarefa'))
listaDeTarefas.push(prompt('Digite a segunda tarefa'))
listaDeTarefas.push(prompt('Digite a terceira tarefa'))
/*C)*/ console.log(listaDeTarefas)
/*D)*/  let tarefaFeita = prompt('Digite o indice de uma tarefa que você já fez.')
/*E)*/listaDeTarefas.splice(tarefaFeita-1,1)
/*F)*/console.log(listaDeTarefas)

