"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
//converte o body de todas as respostas para o formato Json
app.use(express_1.default.json());
//habilita o compartilhamento de informações para sites de outros domínios HTTP
app.use((0, cors_1.default)());
//POR PADRÃO DEIXAR POR ULTIMO, NO ARQUIVO DE CÓDIGO!
//execução na porta 3003  
app.listen(3000, () => {
    console.log("Servidor Rodando!");
});
