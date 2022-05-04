import { Response, Request } from "express";
import {connection} from "../connection"
import {user} from "../types"
import { v4 as idGenerator } from 'uuid';

export async function createUser (
    req: Request, 
    res: Response
    ): Promise<void>{

        console.log("entrou!")
        let errorStatusCode : number = 201
        try {
            
            let name = req.body.name
            let email = req.body.email
            let password = req.body.password
            let type = "user"

            
            if(!name || !email || !password){
                errorStatusCode  = 404
                throw new Error("É obrigatório informar todos os campos: Nome, E-mail e Senha")
            }

            let newUser : user = {
                name, 
                id: idGenerator(), 
                email, 
                password,
                type
            }

            await connection("labecommerce_users")
            .insert(newUser)

            res.status(errorStatusCode).send("Usuário Criado com Sucesso!")


        } catch (error:any) {
            res.status(errorStatusCode).send(error.message)
        }
    }