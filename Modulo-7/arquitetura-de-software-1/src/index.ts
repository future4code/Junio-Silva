import {app} from "./app"
import {UserController} from "./controller/UserController"

const userController = new UserController()

app.get("/", async function() { console.log("endpoint teste")} )

app.post("/createUser", userController.createUser)

app.get("/all", userController.getUsers)

app.delete("/:id", userController.deleteUser)


