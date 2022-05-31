import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness"

export class UserController {

   public createUser = async ( req: Request,res: Response ) => {
        try {
            const { name, email, password } = req.body

            const input = {
                name,
                email,
                password
            }

            console.log(input)

            const userBusiness = new UserBusiness
            await userBusiness.createUser(input)

            res.status(201).send({ message: "Usuário criado!" })
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    public getUsers = async ( req: Request,res: Response ) => {

        try {

            const userBusiness = new UserBusiness
            const result = await userBusiness.getUsers()

            res.status(200).send(result)

        }catch (error: any) {
            res.status(404).send(error.message)
        }
    }


    public deleteUser = async ( req: Request,res: Response ) => {

        try {
            
            const IDuser : string = req.params.id 
            const userBusiness = new UserBusiness
            await userBusiness.deleteUser(IDuser)

            res.status(201).send("Usuário deletado!")

        }catch (error: any) {
            res.status(404).send(error.message)
        }
    }
}