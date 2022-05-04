import { Response, Request } from "express";
import { connection } from "../connection"
import { user } from "../types"

export async function getProducts (
    req: Request, 
    res: Response
    ): Promise<void>{

        let StatusCode : number = 200
        try {
           const result : Array<user> = await connection("labecommerce_products")

            res.status(StatusCode).send(result)

        } catch (error:any) {
            res.status(StatusCode).send(error.message)
        }
    }