import {BaseDatabase} from "./BaseDatabase" 
import {task} from "../types"

export class TaskDatabase extends BaseDatabase {
    
    public insertTask = async( task: task ) => {
        try {

            await TaskDatabase.connection.insert({
                id: task.id,
                title: task.title,
                description: task.description,
                deadline: task.deadline,
                author_id: task.authorId,

            }).into('Architecture_task')

        } catch (error:any) {
            throw new Error(error.message)
        }
    }


}