"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.app.get("/users", () => {
    console.log("bateu!");
});
