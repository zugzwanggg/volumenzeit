import express, { Express } from "express";
import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth";
import checkAuth from "./middleware/checkAuth";

const app: Express = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(cookieParser())

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
