import express from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/", userController.create)
userRouter.get("/", userController.getUsers)
userRouter.get("/feed", userController.getPostFeed)
userRouter.get("/:id", userController.getUsersById)


