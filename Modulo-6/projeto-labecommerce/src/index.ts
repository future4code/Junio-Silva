import { app } from "./app"
import { createUser } from "./endpoints/createUser"
import { getUsers } from "./endpoints/getUsers"
import { getProducts } from "./endpoints/getProducts"
import { createProduct } from "./endpoints/createProduct"
import { recordPurchase } from "./endpoints/recordPurchase"
import { getPurchaseByID } from "./endpoints/getPurchaseByID"


//USER ENTITY 
app.get("/users", getUsers)
app.post("/users", createUser)
app.get ("/users/:user_id/purchases", getPurchaseByID)

//PRODUCT ENTITY 
app.get("/products", getProducts)
app.post ("/products", createProduct)

//PURCHASE ENTITY 
app.post ("/purchases", recordPurchase)

