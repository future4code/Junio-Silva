//RESPOSTAS.

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

    public getCpf = () => this.cpf
    public getName = () => this.name
    public getAge = () => this.age
    public getBalance = () => this.balance
    public getTransactions = () => this.transactions
  
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

  //Criando nova instancia da class UserAccount.
  const juniorAccount: UserAccount = new UserAccount("11955811652", "Junio Batista", 27) 
  

  /*1 - C) Como conseguimos ter acesso às propriedades privadas de uma classe?
  RESPOSTA: Usando funções getters e setters publicas.
  */

  //=========================================================//

  /* 2 -  Transforme a variável de tipo abaixo, chamada Transaction em uma classe Transaction. 
  type Transaction = {
    description: string,
    value: number,
    date: string
  }*/

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    public getDescription(): string { return this.description}
    public getValue (): number { return this.value}
    public getDate (): string { return this.date}

    constructor(
        date: string,
        value: number,
        description: string){
            this.date = date
            this.value = value
            this.description = description
        }
}

    /* 3 - Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação. 
    Ela deve possuir a propriedades accounts, privada (crie os getters e setters que achar apropriado).*/

class Bank {
    private accounts:Array<UserAccount>

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }
    
    public getAccounts (): Array<UserAccount> { 
        return  this.accounts 
    }

    public setAccounts (accountsToAdd: Array<UserAccount> ): string { 
      this.accounts = accountsToAdd
      return "Accounts added successfully!"
    }
}

    

