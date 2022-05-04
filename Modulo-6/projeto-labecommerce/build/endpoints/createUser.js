"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const connection_1 = require("../connection");
const uuid_1 = require("uuid");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("entrou!");
        let errorStatusCode = 201;
        try {
            let name = req.body.name;
            let email = req.body.email;
            let password = req.body.password;
            if (!name || !email || !password) {
                errorStatusCode = 404;
                throw new Error("É obrigatório informar todos os campos: Nome, E-mail e Senha");
            }
            let newUser = {
                name,
                id: (0, uuid_1.v4)(),
                email,
                password
            };
            yield (0, connection_1.connection)("labecommerce_users")
                .insert({ newUser });
            res.status(errorStatusCode).send("Usuário Criado com Sucesso!");
        }
        catch (error) {
            res.status(errorStatusCode).send(error.message);
        }
    });
}
exports.createUser = createUser;
