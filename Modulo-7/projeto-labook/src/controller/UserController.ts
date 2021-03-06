import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";

export class UserController {

    async create(req: Request, res: Response):Promise<void> {
      try {
        const input: UserInputDTO = req.body;
  
       const userBusiness = new UserBusiness();
        await userBusiness.create(input);
  
        res.status(201).send({ message: "Usuario cadastrado com sucesso" });
  
      } catch (error:any) {
        res.status(400).send(error.message);
      }
  
    }
  
    getUsers = async ( req: Request,res: Response ) => {
  
      try {
  
          const userBusiness = new UserBusiness
          const result = await userBusiness.getUsers()
  
          res.status(200).send(result)
  
      }catch (error: any) {
          res.status(404).send(error.message)
      }
  }

  getUsersById = async ( req: Request,res: Response ) => {
  
    try {

      const  id : string = req.params.id as string

      const userBusiness = new UserBusiness
      const result = await userBusiness.getUserById(id)

      res.status(200).send(result)

    }catch (error: any) {
        res.status(404).send(error.message)
    }
  }

  public getPostFeed = async (req: Request, res: Response) => {

    const  userId  = req.query.id as string

    try {

        const userBusiness = new UserBusiness
        const result = await userBusiness.getPostFeed(userId)

        res.status(200).send(result);

    } catch (error: any) {}

  }
  
}