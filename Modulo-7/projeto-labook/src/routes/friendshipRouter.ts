import express from 'express'
import { FriendshipController } from '../controller/FriendShipController'

export const friendshipRouter = express.Router()

const friendshipController = new FriendshipController()

friendshipRouter.delete("/:friendId", friendshipController.deleteFriend)
friendshipRouter.put("/add/:userId", friendshipController.addNewFriend)


