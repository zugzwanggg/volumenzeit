import express from "express";
import dotenv from "dotenv";
dotenv.config()
import mongoose from "mongoose";
import cors from 'cors'
import { authRouter } from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use('/auth', authRouter);


mongoose.connect(process.env.MONGODB_URI)
.then(()=> {
  console.log('Db is ok')
  app.listen(3000, ()=>{
    console.log(`Server is running at port: ${process.env.PORT}`)
  })  
})
.catch(err=> {
  console.log(err);
})