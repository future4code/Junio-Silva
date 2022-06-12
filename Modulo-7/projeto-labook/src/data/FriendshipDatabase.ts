
import { BaseDatabase } from "./BaseDatabase";
import { PostDatabase } from "./PostDatabase";

export class FriendshipDatabase extends BaseDatabase {
    private static FRIENDSHIP_DB = "labook_friendship"

  public addNewFriend = async (id: string, friendId: string) =>  {
    try {
      
     const queryResult = await FriendshipDatabase
      .connection(FriendshipDatabase.FRIENDSHIP_DB)
      .insert({user_id: id, friend_id: friendId})
    
     return queryResult
    }catch (error:any) {
     throw new Error(error.message) 
    }
  }


  public deleteFriend = async (id: string, friendId: string) => {
    try {
        return await FriendshipDatabase.connection(FriendshipDatabase.FRIENDSHIP_DB)
            .where("user_id", "LIKE", id )
            .andWhere("friend_id", "LIKE", friendId)
            .del()
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
  }
}