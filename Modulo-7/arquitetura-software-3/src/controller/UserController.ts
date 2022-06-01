import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/User";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const input : UserInputDTO = { email, name, password };

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });

    } catch (error) {
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

}
