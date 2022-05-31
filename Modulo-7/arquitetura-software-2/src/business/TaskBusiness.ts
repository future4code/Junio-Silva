import { v4 as generateId  } from "uuid"
import { TaskDatabase } from "../data/TaskDatabase";

export class TaskBusiness {

    public createTask = async (input:any) => {
        try {
            console.log("business tela -->", input)
        const { 
            title, 
            description, 
            deadline, 
            authorId 
        } = input
    
        if (
            !title ||
            !description ||
            !deadline ||
            !authorId
        ) {
            throw new Error('Preencha todos os campos!')
        }
    
        const id: string = generateId()
        const taskDatabase = new TaskDatabase
        
        await taskDatabase.insertTask({
            id,
            title,
            description,
            deadline,
            authorId
        })
        
        } catch (error:any) {
        throw new Error(error.message)
        }
    }

    public getTasks = async () => {
        const userDatabase = new TaskDatabase
        const result = await userDatabase.getTasks()
        return result
    }

}