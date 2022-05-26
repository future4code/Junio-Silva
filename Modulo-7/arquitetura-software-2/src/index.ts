import {app} from "./app"
import {userRouter} from "./controller/routes/UserRouter"
import {taskRouter} from "./controller/routes/TaskRouter"

app.get("/", async function() { console.log("endpoint teste")} )

app.use("/user", userRouter)
app.use("/task", taskRouter)


