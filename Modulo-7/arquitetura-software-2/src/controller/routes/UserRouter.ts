import express from "express";
import { UserController } from "../UserController";

export const userRouter = express.Router();

const userControler = new UserController()

userRouter.post("/", userControler.createUser)
userRouter.get("/all", userControler.getUsers)
userRouter.delete("/:id", userControler.deleteUser)

