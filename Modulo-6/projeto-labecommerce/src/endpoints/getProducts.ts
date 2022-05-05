import { Response, Request } from "express";
import { connection } from "../connection"
import { product } from "../types"

export async function fetchProducts (): Promise<any> {

    const result : Array<product> = await connection("labecommerce_products")

    return result

}


export async function getProducts (
    req: Request, 
    res: Response
    ): Promise<void>{

        let statusCode : number = 200
        try {

            let products : Promise<any> = await fetchProducts()
            res.status(statusCode).send(products)

        } catch (error:any) {
            res.send(error.message || error.sqlMessage)
        }
    }