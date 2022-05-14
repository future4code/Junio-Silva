import {v4 as idGenerator} from 'uuid'

//EXERCICIOS DE HERANÇAS.

//Exercicio 1
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(name: string, email: string, password: string){
        console.log("Chamando o construtor da classe User")
        this.id = idGenerator()
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}

    public introduceYourself(): string {
        return `Olá! Meu nome é ${this.name}, bom dia !`
    }
}

const junior = new User("Junio Batista", "juniin1230@gmail.com", "1234567898")
//teste
console.log(
    junior.getId(),
    junior.getEmail(), 
    junior.getName()
    )

    //RESPOSTA 1A) Seria possível imprimir a senha (password) atrelada a essa instância?
    //seria possivel, se tivesse uma função getter. Mas nao tem.


    //RESPOSTA 1B) Apenas uma vez, quando a instancia é construida.

    //EXERCICIOS 2

    class Customer extends User {
        public purchaseTotal: number = 0;
        private creditCard: string;
      
        constructor(
          email: string,
          name: string,
          password: string,
          creditCard: string
        ) {
          super(email, name, password);
          console.log("Chamando o construtor da classe Customer");
          this.creditCard = creditCard;
        }
      
        public getCreditCard(): string {
          return this.creditCard;
        }

        // public getPassword(): string {
        //     return this.password;
        //   }
      }

      //CRIANDO UMA INSTANCIA DE COSTUMER.
      const Coustumer1 =  new Customer(
        "Junior da Silva Sauro",
        "juniodabike@bol.com.br",
        "123456789", 
        "CREDITCARD12355"
          )

    //   console.log(Coustumer1)

    //RESPOSTA 2A e B) Agora apareceram 2 console.logS, um para quando foi chamados o construtor(super) da classe pai(user), outra quando foi chamado o construtor da classe filha(costumer).
    
    //EXERCICIO 3
    console.log(Coustumer1.getCreditCard())
    console.log(Coustumer1.getEmail())
    console.log(Coustumer1.getId())
    console.log(Coustumer1.getName())
    console.log(Coustumer1.introduceYourself())
    
    //RESPOSTA 3A ) Não é possivel imprimir o Password porque ele está definido como privado na classe pai, 
    //então nao pode ser acessado por classes filhas.

    //EXERCICIO 4
    //alterações pedidas foram implementadas na classe user.

    //EXERCICIO 5
    //metodo pedido foi implementado na classe user.
    /////////////////////////////////////////////////////////////////////////////////////////////

    //EXERCICIOS DE POLIMORFISMO

    export interface Client {
        name: string;
        // Refere-se ao nome do cliente
        registrationNumber: number;
        // Refere-se ao número de cadastro do cliente na concessionária
          // como se fosse um id
        consumedEnergy: number;
        // Refere-se à energia consumida pelo cliente no mês
        calculateBill(): number;
        // Retorna o valor da conta em reais
      }
      

    const client : Client = {
        name:"Goli",
        registrationNumber: 1,
        consumedEnergy: 100,
    
        calculateBill: () => {
        return 2;
    }
    }
