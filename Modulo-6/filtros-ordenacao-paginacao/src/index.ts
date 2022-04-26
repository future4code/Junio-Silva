import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { Request, Response } from "express"
import { connection } from "./data/connection"


app.get("/recipes", getAllRecipes)


app.get("/teste", (req: Request, res: Response ): any => {
console.log("Funcionou")
res.end()
})