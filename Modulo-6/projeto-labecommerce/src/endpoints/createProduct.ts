import { Response, Request } from "express";
import {connection} from "../connection"
import { product } from "../types"
import { v4 as idGenerator } from 'uuid';

export async function createProduct (
    req: Request, 
    res: Response
    ): Promise<void>{
        
        let statusCode : number = 201
        try {
            
            let name : string = req.body.name
            let price : number = req.body.price
            let image_url : string = req.body.imageUrl
            
            if(!name || !price || !image_url){
                statusCode  = 404
                throw new Error("É obrigatório informar todos os campos: Nome, Preço e URL da imagem")
            }

            let newProduct : product = {
                id: idGenerator(), 
                name, 
                price,
                image_url, 
            }
            statusCode = 201
            await connection("labecommerce_products")
            .insert(newProduct)

            res.status(statusCode).send("Produto Criado com Sucesso!")


        } catch (error:any) {
            res.status(statusCode).send(error.message)
        }
    }