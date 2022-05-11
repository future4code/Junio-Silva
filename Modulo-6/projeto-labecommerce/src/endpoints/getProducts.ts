import { Response, Request } from "express";
import { connection } from "../connection"
import { product } from "../types"

export async function fetchProducts (order?:string, title?: string): Promise<any> {

    if(!title){ title = "%"} 

    const result : Array<product> = await connection("labecommerce_products")
    .select()
    .where("name","like",`%${title}%` )
    .orderBy("name", order)

    return result
}


export async function getProducts (
    req: Request, 
    res: Response
    ): Promise<void>{

        let statusCode : number = 200
        let order = req.query.order as string
        let title = req.query.title as string
        try {

            let products : Promise<any> = await fetchProducts(order, title)

            res.status(statusCode).send(products)

        } catch (error:any) {
            res.send(error.message || error.sqlMessage)
        }
    }