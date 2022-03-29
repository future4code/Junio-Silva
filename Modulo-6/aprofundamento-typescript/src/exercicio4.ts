// a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use comentários para responder as questões.
// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
//RESPOSTA:  Uso um script que criei, ele faz a transpilação usando o comando tsc e executa o arquivo JS que foi gerado.

// c) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.
//RESPOSTA: seria diferente sim, porque ao usar o comando tsc eu teria que passar o caminho até o arquivo que eu quero transpilar.

// d) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
//R0ESPOSTA: SIM, usando o tsc sem nenhum parametro você transpila todos os arquivos de uma pasta, ou você pode também colocar no comando tsc os arquivos separados por espaço. (exemplo tsc arquivo1.ts arquivo2.ts arquivo3.ts)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}