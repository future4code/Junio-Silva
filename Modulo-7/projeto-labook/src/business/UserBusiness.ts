import { UserDatabase } from "../data/UserDatabase"
import { User, UserInputDTO } from "../model/user"
import { idGenerate } from '../services/idGenerator'

export class UserBusiness {
  async create(input: UserInputDTO ):Promise<void> {

    const { email, name, password } = input;

    if (!name || !email ||  !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = idGenerate()
    const newUser: User = { id, name, email, password }

    const userDatabase = new UserDatabase()
    await userDatabase.create(newUser)
  }

  public getUsers = async () => {
    const userDatabase = new UserDatabase
    const result: Array<User> = await userDatabase.getUsers()
    return result
  }

  public getUserById = async (id: string) => {
    const userDatabase = new UserDatabase

    const result = await userDatabase.getUserById(id)

    return result
  }

  async getPostFeed(id:string ): Promise<any> {

    try {

        if (!id) {
            throw new Error('Autenticação Necessária');
        }

        const userDatabase = new UserDatabase()
        const result = await userDatabase.getPostFeed(id)
        return result

    } catch (error: any) {
        throw new Error(error.message);
    }
  }

}