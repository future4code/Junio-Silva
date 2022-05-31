import {BaseDatabase} from "./BaseDatabase" 
import {user} from "../types"

export class UserDatabase extends BaseDatabase {
    
    public insertUser = async( user: user ) => {
        try {

            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                nickname: user.nickname,
                email: user.email,
                password: user.password
            }).into('Architecture_User')

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public getUsers = async () => {
       try {
        const result = await UserDatabase.connection('Architecture_User').select()
        return result
       }catch (error:any) {
        throw new Error(error.message) 
       }

    }

    public deleteUser = async( userId: string ) => {
        try {

            console.log("userID a ser deletado:" ,userId)

            await UserDatabase.connection("Architecture_User")
            .delete()
            .where({ "id" : userId })
        
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

}