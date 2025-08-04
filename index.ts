import express, {Request, Response} from "express";
import dotenv from"dotenv"

dotenv.config();
const app=express();
const PORT=process.env.PORT;

app.get("/",(request:Request,response:Response)=>{
  response.status(200).send("Helloo world");
});

app.get("/boondikaladdoo",(request:Request, response:Response)=>{
  response.status(200).send("you are my boondi ka laddoo");
});

app.listen(PORT,()=>{
  console.log("running on",PORT)
});