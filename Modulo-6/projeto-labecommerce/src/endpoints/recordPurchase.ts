import { Response, Request } from "express";
import { connection } from "../connection"
import { purchase } from "../types"
import { getProducts } from "./getProducts"


export async function recordPurchase (
    req: Request, 
    res: Response
    ): Promise<void>{

        let StatusCode : number = 200
        try {
            let user_id : string = req.body.quantity
            let product_id : string = req.body.quantity
            let quantity : number = req.body.quantity

            const products  = await getProducts(req, res)

            res.status(StatusCode).send(products)

        } catch (error:any) {
            res.status(StatusCode).send(error.message)
        }
    }