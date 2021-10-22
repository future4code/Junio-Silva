Crie uma função que recebe um __array de números__ e um __número escolhido__. 
A função deve retornar __quantas vezes__ este número aparece no array.

Ex: se o array for [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5] e o número escolhido for 4, 
sua função deve dizer: __O número 4 aparece 3x__

Para o mesmo array, se o número escolhido for 3, sua função deve retornar: 
__Número não encontrado__

~~~javascript
const comparaNumeros = (arrayDeNumeros, numeroEscolhido) => {
  const quantidade = arrayDeNumeros.filter((numero) => numero === numeroEscolhido)
  let resposta  = quantidade.length;

  if(resposta !== 0){
    resposta = `O número ${numeroEscolhido} aparece ${resposta}x`
    }else{
    resposta = "Número não encontrado"
  } return resposta
}
~~~
