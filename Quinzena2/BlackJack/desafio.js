/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
function handlearr(ar){
   let sum = 0
   for(const number of ar){
      sum+=number
   }
      if(sum>0){
         return sum
      } else {console.log('É zero')
      }
}
console.log(handlearr([12,8,30]))