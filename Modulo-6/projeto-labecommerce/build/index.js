"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const createUser_1 = require("./endpoints/createUser");
const getUsers_1 = require("./endpoints/getUsers");
const getProducts_1 = require("./endpoints/getProducts");
const createProduct_1 = require("./endpoints/createProduct");
const recordPurchase_1 = require("./endpoints/recordPurchase");
const getPurchaseByID_1 = require("./endpoints/getPurchaseByID");
//USER ENTITY 
app_1.app.get("/users", getUsers_1.getUsers);
app_1.app.post("/users", createUser_1.createUser);
app_1.app.get("/users/:user_id/purchases", getPurchaseByID_1.getPurchaseByID);
//PRODUCT ENTITY 
app_1.app.get("/products", getProducts_1.getProducts);
app_1.app.post("/products", createProduct_1.createProduct);
//PURCHASE ENTITY 
app_1.app.post("/purchases", recordPurchase_1.recordPurchase);
