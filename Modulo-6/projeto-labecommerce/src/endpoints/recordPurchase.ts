import { Response, Request } from "express";
import { connection } from "../connection"
import { purchase } from "../types"
import { fetchUsers } from "./getUsers"
import { fetchProducts } from "./getProducts"
import { product, user } from "../types"
import { v4 as idGenerator } from 'uuid';



export async function recordPurchase (
    req: Request, 
    res: Response
    ): Promise<void>{

        let StatusCode : number = 200
        try {
            let user_id : string = req.body.userId
            let product_id : string = req.body.productId
            let quantity : number = req.body.quantity

            const users  = await fetchUsers()
            const products = await fetchProducts()

            const productIdCheck = products.find((product: product)=>{
                return product.id === product_id
            })
            if(!productIdCheck){
                throw new Error("ID de produto inválido!")
            }

            const userIdCheck = users.find((user: product)=>{
                return user.id === user_id
            })
            if(!userIdCheck){
                throw new Error("ID de Usuário inválido!")
            }

            let price = productIdCheck.price * quantity

            const newPurchase: purchase = {
                id: idGenerator(),
                user_id,
                product_id,
                quantity,
                total_price: price
            }

            await connection("labecommerce_purchases")
            .insert(newPurchase)
           res.status(201).send("Compra registrada!")

        } catch (error:any) {
            res.status(StatusCode).send(error.message)
        }
    }