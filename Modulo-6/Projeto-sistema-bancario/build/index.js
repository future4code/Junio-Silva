"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/user/:d", (req, res) => {
    try {
        const cpf = Number(req.params.cpf);
        const cpf2 = Number(req.query.cpf);
        console.log("cpfparams", cpf, typeof (cpf), "cpfquery", cpf2, typeof (cpf2));
        if (!cpf) {
            res.status(200).send(data_1.userList);
        }
        else {
            let filteredUser = data_1.userList.filter(user => user.cpf === cpf);
            if (!filteredUser) {
                throw new Error("Nenhum usuário cadastrado com cpf informado!");
            }
        }
    }
    catch (error) {
        res.status(404).send(error.message);
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
;
