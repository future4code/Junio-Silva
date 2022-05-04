import { app } from "./app"
import { createUser } from "./endpoints/createUser"
import { getUsers } from "./endpoints/getUsers"
import { getProducts } from "./endpoints/getProducts"
import { createProduct } from "./endpoints/createProduct"
import { recordPurchase } from "./endpoints/recordPurchase"



app.get("/users", getUsers)

app.get("/products", getProducts)

app.post("/users", createUser)

app.post ("/products", createProduct)

app.post ("/purchases", recordPurchase)