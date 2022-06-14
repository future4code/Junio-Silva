import { UserDatabase } from "../data/UserDatabase"
import { UserInputDTO } from "../model/User"
import { idGenerate } from '../services/idGenerator'

export class UserBusiness {
  async create(input: UserInputDTO ):Promise<void> {

    const { email, name, password } = input;

    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = idGenerate()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  public getUsers = async () => {
    const userDatabase = new UserDatabase
    const result = await userDatabase.getUsers()
    return result
}

}
