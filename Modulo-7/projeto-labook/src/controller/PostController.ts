import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../model/post";

export class PostController {

    async create(req: Request, res: Response):Promise<void> {
      try {
        const input: PostInputDTO = req.body;
  
       const postBusiness = new PostBusiness();
        await postBusiness.create(input);
  
        res.status(201).send({ message: "Post criado!" });
  
      } catch (error:any) {
        res.status(400).send(error.message);
      }
  
    }


  
    getPostById = async ( req: Request,res: Response ) => {
  
      try {

        const  id : string = req.params.id as string
  
        const postBusiness = new PostBusiness
        const result = await postBusiness.getPostById(id)
  
        res.status(200).send(result)
  
      }catch (error: any) {
          res.status(404).send(error.message)
      }
  }
  
  }