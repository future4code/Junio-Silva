import { User } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";
import { PostDatabase } from "./PostDatabase";


export class UserDatabase extends BaseDatabase {
  private static DB = "labook_users";
  private static DB_FRIENDSHIP = "labook_friendship"


  async create(user: User): Promise<void> {
    await UserDatabase.connection
      .insert(user)
      .into(UserDatabase.DB);
  }

  public getUsers = async () => {
    try {
     const result = await UserDatabase.connection(UserDatabase.DB).select()
     return result
    }catch (error:any) {
     throw new Error(error.message) 
    }
  }

  public getUserById = async (id: string) =>  {
    try {
      
     const queryResult = await UserDatabase
      .connection(UserDatabase.DB)
      .select("*")
      .where({id})

          if (!queryResult[0]) {
         throw new Error("Usuario não encontrado!")
      }
    
     return queryResult
    }catch (error:any) {
     throw new Error(error.message) 
    }
  }

  public getPostFeed = async (id: string) => {

    try {
        const friendPosts =  await UserDatabase.connection(UserDatabase.DB_FRIENDSHIP)
        .innerJoin(PostDatabase.DB, "labook_friendship.friend_id", '=', 'labook_posts.author_id')
        .select("labook_posts.id", "photo", "description", "type", "created_at", "author_id")
        .orderBy("created_at", "desc")
        console.log("feed",friendPosts)
        return friendPosts

    } catch (error: any) {
      console.log(error)
        throw new Error(error.sqlMessage || error.message)
    }
}

}