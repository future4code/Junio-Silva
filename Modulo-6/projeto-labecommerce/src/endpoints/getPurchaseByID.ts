import { Response, Request } from "express";
import { connection } from "../connection"

export async function getPurchaseByID(
    req: Request,
    res: Response,
   ):Promise<any> {
     try {
      const userId: string = req.params.user_id;
      
      const purchase = await connection("labecommerce_purchases")
      .select(
        "labecommerce_products.name",
        "labecommerce_purchases.quantity",
        "labecommerce_products.price",
        "labecommerce_purchases.total_price")
      .innerJoin(
        "labecommerce_products",
        "labecommerce_products.id",
        "labecommerce_purchases.product_id") 
      .innerJoin(
        "labecommerce_users",
        "labecommerce_users.id",
        "labecommerce_purchases.user_id")
      .where("labecommerce_users.id", userId);
  
      res.status(200).send(purchase)  
     } catch (error: any) {
         res.send(error.message || error.sqlMessage)
     }
   }