import { Post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_posts";

  async create(post: Post): Promise<void> {
    await PostDatabase.connection
      .insert(post)
      .into(PostDatabase.TABLE_NAME);
  }

  public getPost = async (id: string) =>  {
    try {
     const queryResult = await PostDatabase
      .connection(PostDatabase.TABLE_NAME)
      .select("*")
      .where({id})

          if (!queryResult[0]) {

         throw new Error("Post não encontrado!")

      }
      

     return queryResult
    }catch (error:any) {
     throw new Error(error.message) 
    }
  }

}