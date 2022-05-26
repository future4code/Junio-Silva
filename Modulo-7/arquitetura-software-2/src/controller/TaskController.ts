import { Request, Response } from "express";
import { TaskBusiness } from "../business/TaskBusiness"

export class TaskController {

    public createTask = async ( req: Request,res: Response ) => {
        try {
            const { title, description, deadline, authotId }  = req.body

            const taskBusiness  = new TaskBusiness()

            const input  = {
                title, 
                description, 
                deadline, 
                authotId
            }
            await taskBusiness.createTask(input)

            res.status(201).send({ message: "Tarefa criada!" })
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

} 