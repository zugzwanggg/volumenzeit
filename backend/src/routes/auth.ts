import { Router } from "express";
import { createUser, loginUser, logoutUser } from "../controllers/userController";

export const authRouter = Router();

authRouter.post("/signup", createUser);
authRouter.post("/login", loginUser)
authRouter.get("/logout", logoutUser)