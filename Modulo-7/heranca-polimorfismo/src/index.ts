import {v4 as idGenerator} from 'uuid'


//Exercicio 1
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(name: string, email: string, password: string){
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
}

const junior = new User("Junio Batista", "juniin1230@gmail.com", "1234567898")
console.log("getters ---> ",junior.getId(),junior.getEmail(), junior.getName())
