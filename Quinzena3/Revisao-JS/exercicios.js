// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertida = []
    for (let i = array.length-1 ; i>=0 ; i--){
    arrayInvertida.push(array[i])
    } 
  console.log(arrayInvertida)
  return arrayInvertida
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayNumerosPares = []
  for (let item of array){
      if(item % 2 == 0){
      arrayNumerosPares.push(item**2)
      } 
  }return arrayNumerosPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayNumerosPares = []
  for (let item of array){
      if(item % 2 == 0){
      arrayNumerosPares.push(item)
      } 
  }return arrayNumerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(let item of array)  {
    if(item > maiorNumero){
      maiorNumero = item
    }
  }return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

let resposta1 = booleano1 && booleano2 && !booleano4 
let resposta2 = (booleano1 && booleano2) || !booleano3
let resposta3 = (booleano2 || booleano3) && (booleano4 || booleano1)
let resposta4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
let resposta5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

let respostas = [resposta1,resposta2,resposta3,resposta4,resposta5]
return respostas
}

// EXERCÍCIO 07
  function retornaNNumerosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares
  }

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if(a === b && b === c && c===a){
    return "Equilátero"
  } else if(a === b || c===a || c === b){
    return "Isósceles"
  }else{
    return"Escaleno"}
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  let maior 
  let menor

  if(num1>num2){
     maior = num1
     menor =num2
      }else{
      maior =num2
       menor=num1
     }
  let divisor = maior % menor == 0
  let valorDiferenca = maior - menor 
  let objeto = {
    maiorNumero: "X",
    maiorDivisivelPorMenor: "Y",
    diferenca: "Z"}

objeto.maiorNumero = maior
objeto.diferenca = valorDiferenca
objeto.maiorDivisivelPorMenor = divisor
return objeto
  }

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let arrayCrescente = array.sort((a,b)=>{if(a<b)return-1})
  let novoArray = []
  let segundoMaior = arrayCrescente[arrayCrescente.length-2]
  let segundoMenor= arrayCrescente[1]
    novoArray.push(segundoMaior)
    novoArray.push(segundoMenor)
return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let aux
  let condicao 
  
    for(let i =0 ; i < array.length ; i+=1){
      for(let x = 0; x < (array.length-1) ; x+=1){
        if(array[x] > array[x+1]){
          aux = array[x];
          array[x] = array[x+1];
          array[x+1] = aux;
        }
      }
    } return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  let nomeFilme = "O Diabo Veste Prada"
  let anoFilme = 2006
  let diretorFilme = "David Frankel"
  let atoresFilme = ["Meryl Streep", "Anne Hathaway", "Emily Blunt","Stanley Tucci"]
  
  const objetoFilme = {
    nome: null,
    ano: null,
    diretor: null,
    atores: null}
  
    objetoFilme.nome = nomeFilme
    objetoFilme.ano = Number(anoFilme)
    objetoFilme.diretor = diretorFilme
    objetoFilme.atores = atoresFilme
  return objetoFilme}

// EXERCÍCIO 13
  function imprimeChamada() {
    let nomeFilme = "O Diabo Veste Prada"
    let anoFilme = 2006
    let diretorFilme = "David Frankel"
    let atoresFilme = ["Meryl Streep", " Anne Hathaway", " Emily Blunt"," Stanley Tucci"]
    
    const objetoFilme = {
      nome: null,
      ano: null,
      diretor: null,
      atores: null}
    
      objetoFilme.nome = nomeFilme
      objetoFilme.ano = anoFilme
      objetoFilme.diretor = diretorFilme
      objetoFilme.atores = atoresFilme

    return `Venha assistir ao filme ${objetoFilme.nome}, de ${objetoFilme.ano}, dirigido por ${objetoFilme.diretor} e estrelado por ${objetoFilme.atores}.`
  }
// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  let larguraRet = lado1
  let alturaRet = lado2
  let perimetroRet = 2*(lado1+lado2)
  let areaRet = lado1 * lado2

  let DimensoesRetangulo = {
  largura:null, altura:null, perimetro:null, area: null}

  DimensoesRetangulo.largura = larguraRet
  DimensoesRetangulo.altura = alturaRet
  DimensoesRetangulo.perimetro = perimetroRet
  DimensoesRetangulo.area = areaRet
  return DimensoesRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoaAnonima = {
    ...pessoa, 
    nome: "ANÔNIMO"
  } 
  return pessoaAnonima
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let maioresDeIdade = arrayDePessoas.filter((valor, index, array) => {
    if(valor.idade>=18){
      return valor
    }
})
return maioresDeIdade
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let menoresDeIdade = arrayDePessoas.filter((valor, index, array) => {
    if(valor.idade<18){
      return valor
    }
})
return menoresDeIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
let arrayMultiplicadoPor2 = array.map((valor) => {
  let multiplicacao = valor * 2
  return multiplicacao
})
return arrayMultiplicadoPor2
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let arrayMultiplicadoPor2 = array.map((valor) => {
    let multiplicacao = valor*2
    multiplicacao = String(multiplicacao)
    return multiplicacao
 })
return arrayMultiplicadoPor2
}

// EXERCÍCIO 17C
function verificaParidade(array) {
let arrayPares = array.map((valor)=>{
  if(valor%2===0){
    return `${valor} é par`
  }
else
{return `${valor} é ímpar` }
})
return arrayPares
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = pessoas.filter((valor)=>{
    if(valor.idade > 14 && valor.idade < 60 && valor.altura>=1.5){
     return valor
    }
  }) 
  return pessoasAutorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = pessoas.filter((valor)=>{
    if(valor.idade <= 14 || valor.idade > 60 || valor.altura<1.5){
     return valor
    }
  }) 
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  consultasNome.sort((a, b) =>{
    let textA = a.nome.toUpperCase();
    let textB = b.nome.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
