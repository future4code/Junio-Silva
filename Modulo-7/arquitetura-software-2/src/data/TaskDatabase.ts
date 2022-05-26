import {BaseDatabase} from "./BaseDatabase" 
import {task} from "../types"

export class TaskDatabase extends BaseDatabase {
    
    public insertTask = async( task: task ) => {
        try {
            console.log(task)

            await TaskDatabase.connection.insert({
                id: task.id,
                title: task.title,
                description: task.description,
                deadline: task.deadline,
                author_id: task.authorId,

            }).into('Architecture_Task')

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public getTasks = async () => {

        try {

         const result = await TaskDatabase.connection('Architecture_Task').select()
         return result
         
        }catch (error:any) {
         throw new Error(error.message) 
        }
 
     }

}