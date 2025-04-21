import express, { Application, Request, Response } from "express";
import cors from "cors"
import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

const app:Application = express()

app.use(cors());
app.use(express.json());

app.use(router);

app.use(errorHandler)

app.get('/',(req:Request, res:Response)=>{
    res.send({
        message: "bsms server is running"
    })
})
export default app