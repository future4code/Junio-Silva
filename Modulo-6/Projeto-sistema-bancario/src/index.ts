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
                res.status(200).send(`Saldo é R$${findUser.balance.toFixed(2)} `)
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
    try {
        let name: string = req.body.name;
        let cpf: number = Number(req.body.cpf)
        let age: number = Number(req.body.age)

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

            const NewTransaction = {
                service: "Account Created",
                value: 0,
                date,
                comment: "Conta foi criada via agencia bancária."
            }

            newUser.BankStatement.push(NewTransaction)
            userList.push(newUser)

            res.status(201).send("Conta criada com sucesso.")
        }

    } catch (error: any) {
        res.status(Errors.MISSING_PARAMETERS.status).send(error.message)
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