import { user, userList, Errors, transaction } from './data'
import express, { Response, Request } from "express";
import { AddressInfo } from "net";

const app = express();
app.use(express.json());


//REQUISIÇOES GET
//A requisição abaixo retorna todos os usuários, ou um usuário específico caso seja informado o parâmetro cpf que é opcional.

app.get("/user", (req: Request, res: Response) => {
    try {
        const cpf: number = Number(req.query.cpf)

        if (!cpf) {
            res.status(200).send(userList)
        } else {

            let filteredUser = userList.find(user => {
                return user.cpf === cpf
            })

            if (!filteredUser) {
                throw new Error(Errors.USER_NOT_FOUND.message)
            } else {
                res.status(200).send(filteredUser)
            }
        }
    } catch (error: any) {
        res.status(Errors.USER_NOT_FOUND.status).send(error.message)
    }
})

//A requisição abaixo retorna o valor de saldo do usuário, 
//necessário informar nome e cpf.

app.get("/user/balance", (req: Request, res: Response) => {
    try {

        let cpf: number = Number(req.query.cpf)
        let name: string = req.query.name as string

        if (!name || !cpf) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        } else {
            const findUser: user | undefined = userList.find((user) => {
                if (user.cpf === cpf && user.name === name) {
                    return user
                }
            })
            if (findUser) {
                res.status(200).send(`R$${findUser.balance.toFixed(2)} `)
            } else {
                res.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message)
            }
        }
    } catch (error: any) {
        res.status(200).send(error.message)
    }
})
//REQUISIÇOES POST
//Cria usuário, com validações e inclui dados da criação da conta no extrato.
app.post("/user/create", (req: Request, res: Response) => {

    //função ver se é maior de 18
    function ageValidate(userBirthDate:string): number  { 
        let currentDate = new Date();
        let year = currentDate.getFullYear();

        let birthYearParts : Array<string> = userBirthDate.split('/');
        let birthDay : number = Number(birthYearParts[0]);
        let birthMonth : number = Number(birthYearParts[1]);
        let birthYear : number = Number(birthYearParts[2]);
        let age : number = year - birthYear;
        let currentMonth : number = currentDate.getMonth() + 1; 
        //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
        if(currentMonth < birthMonth){
            age--; 
        } else {
        //Se estiver no mes do nascimento, verificar o dia
        if(currentMonth == birthMonth){ 
        if(new Date().getDate() < birthDay ){ 
        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
        age--; 
        }
        }
        } 
        console.log(age)
        return age 

       }

    try {
        let name: string = req.body.name;
        let cpf: number = Number(req.body.cpf)
        let age: number = ageValidate(req.body.age)

        if (!name || !cpf || !age) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        } else if (age < 18) {
            throw new Error(Errors.AUTHORIZATION_NOT_FOUND.message)
        } else {

            const newUser: user = {
                name,
                cpf,
                age,
                balance: 0,
                BankStatement: []
            }

            let time = new Date
            let date = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`

            const NewTransaction: transaction = {
                service: "Account Created",
                value: 0,
                date,
                comment: "Sua conta foi criada."
            }

            newUser.BankStatement.push(NewTransaction)
            userList.push(newUser)

            res.status(201).send("Conta criada com sucesso.")
        }

    } catch (error: any) {
        res
            .status(Errors.MISSING_PARAMETERS.status)
            .send(error.message)
    }
})

//REQUISIÇOES PUT
app.put("/user/deposit", (req: Request, res: Response) => {
    try {
        let name: string = req.query.name as string
        let cpf: number = Number(req.query.cpf)
        let cashValue: number = Number(req.body.cashValue)

        console.log(name, cpf, cashValue)

        if (!name || !cpf) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        } else {
            let newList: Array<user> = userList.map((user) => {
                if (user.name === name && user.cpf === cpf) {

                    user.balance += cashValue

                    let time = new Date
                    let date = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`

                    const NewTransaction: transaction = {
                        service: "Deposit",
                        value: cashValue ,
                        date,
                        comment: `Depósito de R$${cashValue} realizado em conta corrente.`
                    }

                    user.BankStatement.push(NewTransaction)
                    return user
                }
                return user
            })
            res.status(200).send(newList)
        }
    } catch (error: any) {
        res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
    }
})

app.put("/user/paybill/:cpf", (req: Request, res: Response) => {

    let userAuth = Number(req.params.cpf)
    let value = Number(req.body.value)
    let comment = req.body.comment

    try {
        if (!value || !comment) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        } else {
            let payment: Array<user> = userList.map((user) => {
                if (user.cpf === userAuth) {

                    user.balance -= value

                    let time = new Date
                    let date = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`

                    const NewTransaction: transaction = {
                        service: "Payment",
                        value,
                        date,
                        comment: `Pagamento no valor de R$${value} realizado com sucesso.`
                    }

                    user.BankStatement.push(NewTransaction)
                    return user
                }
                return user
            })
            res.status(200).send(payment)
        }
    } catch (error: any) {
        res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});