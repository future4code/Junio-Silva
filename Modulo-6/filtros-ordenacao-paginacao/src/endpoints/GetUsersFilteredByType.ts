import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUserFilteredByType = async (req: Request, res: Response): Promise<void> => {

   let tipo: string = req.query.tipo as string

   if (!tipo || tipo === "") {
      tipo = "%"
   }

   async function QueryWithFilters(): Promise<any> {
      const result = await connection("aula48_exercicio")
         .select()
         .where("type", "like", `%${tipo}%`)
      return result
   }

   try {
      const users = await QueryWithFilters()

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }

}