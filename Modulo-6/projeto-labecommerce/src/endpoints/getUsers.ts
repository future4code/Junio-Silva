import { Response, Request } from "express";
import { connection } from "../connection"
import { user } from "../types"

export async function fetchUsers (): Promise<any> {

    const result : Array<user> = await connection("labecommerce_users")

    return result

}


export async function getUsers (
    req: Request, 
    res: Response
    ): Promise<void>{

        let errorStatusCode : number = 200
        try {

            let users : Promise<any> = await fetchUsers()
            res.status(errorStatusCode).send(users)

        } catch (error:any) {
            res.send(error.message || error.sqlMessage)
        }
    }