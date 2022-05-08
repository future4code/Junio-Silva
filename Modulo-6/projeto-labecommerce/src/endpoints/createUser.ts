import { Response, Request } from "express";
import { connection } from "../connection"
import { user } from "../types"
import { v4 as idGenerator } from 'uuid';
import transporter from "../services/TransporterNodeMailer"

export async function createUser (
    req: Request, 
    res: Response
    ): Promise<void>{
        
        let errorStatusCode : number = 200

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
                id: idGenerator(), 
                name,
                email, 
                password,
                type
            }

            await connection("labecommerce_users")
            .insert(newUser)

            console.log("enviando email")
            const info = await transporter.sendMail({
                from: `${process.env.NODEMAILER_USER}`,
                to: `${email}`,
                subject: 'Conta Criada',
                text:  'Sua conta foi criada com sucesso! ',
                html: `<h1>Olá ${name},</h1> <p>Sua conta foi criada com sucesso! Agora é só aproveitar todas as nossas ofertas.</p>`
               })

            res.status(errorStatusCode).send("Usuário Criado com Sucesso!")

        } catch (error:any) {
            console.log(error)
            res.status(errorStatusCode).send(error.message)
        }
    }