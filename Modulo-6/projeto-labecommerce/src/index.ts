import { app } from "./app"
import { createUser } from "./endpoints/createUser"


app.get("/users", ()=>{
    console.log("bateu!")
})
