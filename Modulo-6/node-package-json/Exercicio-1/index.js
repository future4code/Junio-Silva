// EXERCICIO 1
// a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, 
//imprima no console uma mensagem que siga a seguinte estrutura: 
//"Olá, (Nome)! Você tem (sua idade) anos."
// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.


//RESPOSTA: 
// a) Para acessa-los devemos usar o array process.argv[]
const [name, age] = [
    process.argv[2] , 
    Number(process.argv[3])]

console.log(`Olá, ${name}! Você tem ${age} anos. Sua idade daqui 7 anos será ${age+7}.`)
console.log("\033[34m Aqui esta o texto em vermelho.")