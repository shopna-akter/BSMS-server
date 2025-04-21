import express, { Application, Request, Response } from "express";
import cors from "cors"
import { CustomerRoutes } from './app/modules/customer/customer.routes';

const app:Application = express()

app.use(cors());
app.use(express.json());

app.use('/api/customers', CustomerRoutes);

app.get('/',(req:Request, res:Response)=>{
    res.send({
        message: "bsms server..."
    })
})
export default app