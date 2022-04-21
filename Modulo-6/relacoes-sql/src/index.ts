import express, { Response, Request } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { connection } from "./connection"

const app = express();
app.use(express.json());
app.use(cors());



const server = app.listen(process.env.PORT || 3006, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});