import { Router } from "express";
import { createUser } from "../controllers/userController.js";

export const authRouter = Router();

authRouter.post("/signup", createUser)