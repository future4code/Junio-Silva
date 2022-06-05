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
    const newUser: User = { id, name, email, password}

    const userDatabase = new UserDatabase()
    await userDatabase.create(newUser)
  }

  public getUsers = async () => {
    const userDatabase = new UserDatabase
    const result = await userDatabase.getUsers()
    return result
}

}