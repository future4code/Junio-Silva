"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Database_1 = require("./Database");
const app = (0, express_1.default)();
//converte o body de todas as respostas para o formato Json
app.use(express_1.default.json());
//habilita o compartilhamento de informações para sites de outros domínios HTTP
app.use((0, cors_1.default)());
//********************************************************************************************************* */
//EXERCICIO 1)  
// Faça a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para a URL base da API. Esse endpoint pode responder apenas com um status ou mensagem fixa.'
app.get("/", (request, Response) => {
    Response.status(201).send("Bateu ok");
});
//********************************************************************************************************* */
//EXERCICIO 2) 
console.log(Database_1.usuarios);
//********************************************************************************************************* */
//EXERCICIOS 2 e 3)
//fiz a tipagem e criei, o array de objetos no arquivo database.ts
//********************************************************************************************************* */
//EXERCICIO 4) 
app.get("/users", (request, Response) => {
    Response.status(201).send("Bateu ok");
});
//********************************************************************************************************* */
//EXERCICIO 5) 
//********************************************************************************************************* */
//EXERCICIO 6) 
//********************************************************************************************************* */
//EXERCICIO 7) 
//********************************************************************************************************* */
//EXERCICIO 8) 
//********************************************************************************************************* */
//EXERCICIO 9) 
//POR PADRÃO DEIXAR POR ULTIMO, NO ARQUIVO DE CÓDIGO!
//execução na porta 3003  
app.listen(3000, () => {
    console.log("Servidor Funcionando!");
});
