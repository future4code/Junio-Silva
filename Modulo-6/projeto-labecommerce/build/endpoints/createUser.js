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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const connection_1 = require("../connection");
const uuid_1 = require("uuid");
const TransporterNodeMailer_1 = __importDefault(require("../services/TransporterNodeMailer"));
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let errorStatusCode = 500;
        try {
            let name = req.body.name;
            let email = req.body.email;
            let password = req.body.password;
            let type = "user";
            if (!name || !email || !password) {
                errorStatusCode = 404;
                throw new Error("É obrigatório informar todos os campos: Nome, E-mail e Senha");
            }
            let newUser = {
                id: (0, uuid_1.v4)(),
                name,
                email,
                password,
                type
            };
            yield (0, connection_1.connection)("labecommerce_users")
                .insert(newUser);
            console.log("enviando email");
            const info = yield TransporterNodeMailer_1.default.sendMail({
                from: `${process.env.NODEMAILER_USER}`,
                to: `${email}`,
                subject: 'Conta Criada',
                text: 'Sua conta foi criada com sucesso! ',
                html: `<h1>Olá ${name},</h1> <p>Sua conta foi criada com sucesso! Agora é só aproveitar todas as nossas ofertas.</p>`
            });
            res.status(errorStatusCode).send("Usuário Criado com Sucesso!");
        }
        catch (error) {
            console.log(error);
            res.status(errorStatusCode).send(error.message);
        }
    });
}
exports.createUser = createUser;
