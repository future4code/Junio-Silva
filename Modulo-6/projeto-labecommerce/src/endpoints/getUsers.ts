import { Response, Request } from "express";
import { connection } from "../connection"
import { user } from "../types"

export async function getUsers (
    req: Request, 
    res: Response
    ): Promise<void>{

        let errorStatusCode : number = 200
        try {
           const result : Array<user> = await connection("labecommerce_users")

            res.status(errorStatusCode).send(result)

        } catch (error:any) {
            res.status(errorStatusCode).send(error.message)
        }
    }