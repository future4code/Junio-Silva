import {user, userList} from './data'
import express , {Response, Request} from "express";
import { AddressInfo } from "net";

const app = express();
app.use(express.json());


//REQUISIÇOES GET
app.get("/user", (req: Request, res: Response)=>{
    try{
        const cpf = Number(req.query.cpf)
    
            if(!cpf) {
                res.status(200).send(userList)
            }else{

                let filteredUser = userList.find(user => {
                    return user.cpf === cpf
                }) 

                if (!filteredUser){
                    throw new Error("Nenhum usuário cadastrado com cpf informado!")
                }else{
                    res.status(200).send(filteredUser)
                }
            }
        } catch (error: any) {
            res.status(404).send(error.message)
        }

})
//REQUISIÇOES POST

app.post("/user/create", (req: Request, res: Response)=>{
    try{

    }catch(error){}
}



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});