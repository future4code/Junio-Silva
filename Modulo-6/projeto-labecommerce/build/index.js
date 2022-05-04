"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const createUser_1 = require("./endpoints/createUser");
const getUsers_1 = require("./endpoints/getUsers");
const createProduct_1 = require("./endpoints/createProduct");
app_1.app.get("/users", getUsers_1.getUsers);
app_1.app.post("/users", createUser_1.createUser);
app_1.app.post("/products", createProduct_1.createProduct);
