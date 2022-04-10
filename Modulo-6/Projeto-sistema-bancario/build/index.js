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
//A requisição abaixo retorna o valor de saldo do usuário, 
//necessário informar nome e cpf.
app.get("/user/balance", (req, res) => {
    try {
        let cpf = Number(req.query.cpf);
        let name = req.query.name;
        if (!name || !cpf) {
            throw new Error(data_1.Errors.MISSING_PARAMETERS.message);
        }
        else {
            const findUser = data_1.userList.find((user) => {
                if (user.cpf === cpf && user.name === name) {
                    return user;
                }
            });
            if (findUser) {
                res.status(200).send(`R$${findUser.balance.toFixed(2)} `);
            }
            else {
                res.status(data_1.Errors.USER_NOT_FOUND.status).send(data_1.Errors.USER_NOT_FOUND.message);
            }
        }
    }
    catch (error) {
        res.status(200).send(error.message);
    }
});
//REQUISIÇOES POST
//Cria usuário, com validações e inclui dados da criação da conta no extrato.
app.post("/user/create", (req, res) => {
    //função ver se é maior de 18
    function ageValidate(userBirthDate) {
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let birthYearParts = userBirthDate.split('/');
        let birthDay = Number(birthYearParts[0]);
        let birthMonth = Number(birthYearParts[1]);
        let birthYear = Number(birthYearParts[2]);
        let age = year - birthYear;
        let currentMonth = currentDate.getMonth() + 1;
        //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
        if (currentMonth < birthMonth) {
            age--;
        }
        else {
            //Se estiver no mes do nascimento, verificar o dia
            if (currentMonth == birthMonth) {
                if (new Date().getDate() < birthDay) {
                    //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                    age--;
                }
            }
        }
        console.log(age);
        return age;
    }
    try {
        let name = req.body.name;
        let cpf = Number(req.body.cpf);
        let age = ageValidate(req.body.age);
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
            const NewTransaction = {
                service: "Account Created",
                value: 0,
                date,
                comment: "Sua conta foi criada."
            };
            newUser.BankStatement.push(NewTransaction);
            data_1.userList.push(newUser);
            res.status(201).send("Conta criada com sucesso.");
        }
    }
    catch (error) {
        res
            .status(data_1.Errors.MISSING_PARAMETERS.status)
            .send(error.message);
    }
});
//REQUISIÇOES PUT
app.put("/user/deposit", (req, res) => {
    try {
        let name = req.query.name;
        let cpf = Number(req.query.cpf);
        let cashValue = Number(req.body.cashValue);
        console.log(name, cpf, cashValue);
        if (!name || !cpf) {
            throw new Error(data_1.Errors.MISSING_PARAMETERS.message);
        }
        else {
            let newList = data_1.userList.map((user) => {
                if (user.name === name && user.cpf === cpf) {
                    user.balance += cashValue;
                    let time = new Date;
                    let date = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
                    const NewTransaction = {
                        service: "Deposit",
                        value: cashValue,
                        date,
                        comment: `Depósito de R$${cashValue} realizado em conta corrente.`
                    };
                    user.BankStatement.push(NewTransaction);
                    return user;
                }
                return user;
            });
            res.status(200).send(newList);
        }
    }
    catch (error) {
        res.status(data_1.Errors.MISSING_PARAMETERS.status).send(data_1.Errors.MISSING_PARAMETERS.message);
    }
});
app.put("/user/paybill/:cpf", (req, res) => {
    let userAuth = Number(req.params.cpf);
    let value = Number(req.body.value);
    let comment = req.body.comment;
    try {
        if (!value || !comment) {
            throw new Error(data_1.Errors.MISSING_PARAMETERS.message);
        }
        else {
            let payment = data_1.userList.map((user) => {
                if (user.cpf === userAuth) {
                    if (value > user.balance) {
                        throw new Error("Você não tem saldo suficiente.");
                    }
                    user.balance -= value;
                    let time = new Date;
                    let date = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
                    const NewTransaction = {
                        service: "Payment",
                        value,
                        date,
                        comment: `Pagamento no valor de R$${value} realizado com sucesso.`
                    };
                    user.BankStatement.push(NewTransaction);
                    return user;
                }
                return user;
            });
            res.status(200).send(payment);
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
