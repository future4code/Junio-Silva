import { Request, Response } from "express"
import { connection } from "../data/connection"


//Exercício 1 A e B)
export const getAllUsersFilteredbyName = async(req: Request,res: Response): Promise<void> =>{
   
   let nome:string = req.query.nome as string

   if(!nome || nome === ""){
       nome = "%"
   }
   

   async function QueryWithFilters():Promise<any> {
      const result = await connection("aula48_exercicio")
      .select()
      .where("name", "like", `%${nome}%`)

   
      return result
   }

   try {
      const users = await QueryWithFilters()

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }

}




