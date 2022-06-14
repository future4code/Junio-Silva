import { Post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
   static DB = "labook_posts";

  async create(post: Post): Promise<void> {
    await PostDatabase.connection
      .insert(post)
      .into(PostDatabase.DB);
  }

  public getPost = async (id: string) =>  {
    try {
     const queryResult = await PostDatabase
      .connection(PostDatabase.DB)
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