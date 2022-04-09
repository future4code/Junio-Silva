"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//REQUISIÇOES GET
//A requisição abaixo retorna todos os usuários, ou um usuário específico caso seja informado o parâmetro cpf que é opcional.
app.get("/user", (req, res) => {
    try {
        const cpf = Number(req.query.cpf);
        if (!cpf) {
            res.status(200).send(data_1.userList);
        }
        else {
            let filteredUser = data_1.userList.find(user => {
                return user.cpf === cpf;
            });
            if (!filteredUser) {
                throw new Error(data_1.Errors.USER_NOT_FOUND.message);
            }
            else {
                res.status(200).send(filteredUser);
            }
        }
    }
    catch (error) {
        res.status(data_1.Errors.USER_NOT_FOUND.status).send(error.message);
    }
});
//A requisição abaixo retorna do usuário, necessário informar nome e cpf.
app.get("/user/balance", (req, res) => {
    try {
        let cpf = Number(req.query.cpf);
        let name = req.query.name;
        console.log(cpf, name);
        res.send({ cpf, name });
        if (!name || !cpf) {
            throw new Error(data_1.Errors.MISSING_PARAMETERS.message);
        }
        else {
            const findUser = data_1.userList.find((user) => {
                if (user.cpf === cpf && user.name === name) {
                    console.log("found it");
                    return user;
                }
            });
            if (!findUser) {
                throw new Error(data_1.Errors.USER_NOT_FOUND.message);
            }
            let balance = findUser.balance;
            res.status(200).send(balance);
        }
    }
    catch (error) {
        res.status(data_1.Errors.USER_NOT_FOUND.status).send(error.message);
    }
});
//REQUISIÇOES POST
//Cria usuário, com validações e inclui criação da conta no extrato.
app.post("/user/create", (req, res) => {
    try {
        let name = req.body.name;
        let cpf = Number(req.body.cpf);
        let age = Number(req.body.age);
        if (!name || !cpf || !age) {
            throw new Error(data_1.Errors.MISSING_PARAMETERS.message);
        }
        else if (age < 18) {
            throw new Error(data_1.Errors.AUTHORIZATION_NOT_FOUND.message);
        }
        else {
            const newUser = {
                name,
                cpf,
                age,
                balance: 0,
                BankStatement: []
            };
            let time = new Date;
            let date = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
            console.log(date);
            const NewTransaction = {
                service: "Account Created",
                value: 0,
                date,
                comment: "Conta foi criada via agencia bancária."
            };
            newUser.BankStatement.push(NewTransaction);
            data_1.userList.push(newUser);
            console.log(data_1.userList);
            res.status(201).send("Conta criada com sucesso.");
        }
    }
    catch (error) {
        res.status(data_1.Errors.MISSING_PARAMETERS.status).send(error.message);
    }
});
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});