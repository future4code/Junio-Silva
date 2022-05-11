//RESPOSTAS TEXTOS.

/*1 - A) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
RESPOSTA: O construtor serve para fazer definições assim que uma instancia daquela classe for criada. 
Ele é chamado quando se cria um novo objeto usando a Classe em questão.
*/

/*1 - B) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
RESPOSTA:  O console log aparece uma unica vez, em cada construção.
*/


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: any[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  }

  const juniorAccount: UserAccount = new UserAccount("11955811652", "Junio Batista", 27) 

  /*1 - C) Como conseguimos ter acesso às propriedades privadas de uma classe?
  RESPOSTA: Usando funções getters e setters
  */