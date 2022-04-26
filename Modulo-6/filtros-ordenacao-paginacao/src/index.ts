import { app } from "./app";
import { getAllUsersFilteredbyName } from "./endpoints/GetUsersFilteredByName";
import { getAllUserFilteredByType } from "./endpoints/GetUsersFilteredByType";
import { Request, Response } from "express"
import { connection } from "./data/connection"

app.get("/user/name", getAllUsersFilteredbyName)
app.get("/user/type", getAllUserFilteredByType)


