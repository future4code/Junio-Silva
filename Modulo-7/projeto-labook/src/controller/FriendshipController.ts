import { Request, Response } from "express";
import { FriendshipBusiness } from "../business/FriendShipBusiness";

export class FriendshipController {

  addNewFriend = async ( req: Request,res: Response ) => {

      try {
  
        const  UserId : string = req.params.userId as string
        const  FriendId : string = req.query.friendId as string
  
        const friendshipBusiness = new FriendshipBusiness
        await friendshipBusiness.addNewFriend(UserId,FriendId)
  
        res.status(200).send(" Amigo adicionado! ")
  
      }catch (error: any) {
          res.status(404).send(error.message)
      }
  
    }

  deleteFriend = async ( req: Request,res: Response ) => {

      try {
  
        const  UserId : string = req.params.friendId as string
        const  FriendId : string = req.query.friendId as string
  
        const friendshipBusiness = new FriendshipBusiness
        await friendshipBusiness.deleteFriend(UserId,FriendId)
  
        res.status(200).send(" Amigo deletado! ")
  
      }catch (error: any) {
          res.status(404).send(error.message)
      }
  
    }


}