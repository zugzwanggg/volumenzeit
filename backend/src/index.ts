import express, { Express } from "express";
import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { authRouter } from "./routes/auth";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter)



mongoose.connect(process.env.MONGODB_URI || "")
  .then(() => {
    console.log("Db is ok");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on http://localhost:" + process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err.message);

  })
