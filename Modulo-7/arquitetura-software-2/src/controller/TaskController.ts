import { Request, Response } from "express";
import { TaskBusiness } from "../business/TaskBusiness"

export class TaskController {

    public createTask = async ( req: Request,res: Response ) => {
        try {
            const { title, description, deadline, authorId }  = req.body

            const taskBusiness  = new TaskBusiness()

            const input  = {
                title, 
                description, 
                deadline, 
                authorId
            }
            await taskBusiness.createTask(input)

            res.status(201).send({ message: "Tarefa criada!" })
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    public getTasks = async ( req: Request,res: Response ) => {

        try {

            const taskBusiness = new TaskBusiness
            const result = await taskBusiness.getTasks()

            res.status(200).send(result)

        }catch (error: any) {
            res.status(404).send(error.message)
        }
    }

} 