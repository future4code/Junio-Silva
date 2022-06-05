import { User } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_users";

  async create(user: User): Promise<void> {
    await UserDatabase.connection
      .insert(user)
      .into(UserDatabase.TABLE_NAME);
  }

  public getUsers = async () => {
    try {
     const result = await UserDatabase.connection(UserDatabase.TABLE_NAME).select()
     return result
    }catch (error:any) {
     throw new Error(error.message) 
    }
  }

}