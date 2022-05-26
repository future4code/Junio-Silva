import {BaseDatabase} from "./BaseDatabase" 
import {user} from "../types"

export class UserDatabase extends BaseDatabase {
    
    public insertUser = async( user: user ) => {
        try {

            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into('User_Arq')

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public getUsers = async () => {
       try {
        const result = await UserDatabase.connection('User_Arq').select()
        return result
       }catch (error:any) {
        throw new Error(error.message) 
       }

    }

    public deleteUser = async( userId: string ) => {
        try {

            console.log("userID a ser deletado:" ,userId)

            await UserDatabase.connection
            .delete()
            .where({ "id" : userId })
        
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

}