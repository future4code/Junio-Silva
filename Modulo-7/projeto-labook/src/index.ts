/**************************** IMPORTS ******************************/
import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import {app} from "./app"
import {userRouter} from './routes/userRouter'
import {postRouter} from './routes/postRouter'


app.use('/user', userRouter)
app.use('/post', postRouter)
