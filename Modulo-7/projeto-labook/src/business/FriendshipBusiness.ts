import { FriendshipDatabase } from "../data/FriendshipDatabase"
import { Post } from '../model/post'

export class FriendshipBusiness {

  async addNewFriend( id:string, FriendId:string ):Promise<void> {


    if (!id || !FriendId ) {
      throw new Error("Informe os IDs")
    }

    const friendshipDatabase = new FriendshipDatabase()
    await friendshipDatabase.addNewFriend(id, FriendId)
  }

  async deleteFriend(id:string,FriendId:string ):Promise<void> {

    if ( !FriendId ) {
      throw new Error("Informe o ID a ser deletado")
    }

    const friendshipDatabase = new FriendshipDatabase()
    await friendshipDatabase.deleteFriend(id,FriendId)
  }

}