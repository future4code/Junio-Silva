
import { v4 as generateId  } from "uuid"
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness  {
   
    public createUser = async (input:any) => {
        try {
        const { name, email, password } = input
    
        if (
            !name ||
            !email ||
            !password
        ) {
            throw new Error('Preencha os campos "name", "email" e "password"')
        }
    
        const id: string = generateId()
        const userDatabase = new UserDatabase
        
    
        await userDatabase.insertUser({
            id,
            name,
            email,
            password
        })
        
        } catch (error:any) {
        throw new Error(error.message)
        }
    }

    public getUsers = async () => {
        const userDatabase = new UserDatabase
        const result = await userDatabase.getUsers()
        return result
    }

    public deleteUser = async (input:any) => {
        try {

        const userDatabase = new UserDatabase
        await userDatabase.deleteUser(input)
        
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}