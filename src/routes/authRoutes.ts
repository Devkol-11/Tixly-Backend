import { Router } from "express";
import * as authController from "../controllers/authControllers";

const authRouter = Router();

authRouter.post("/signUp", authController.signUp);
authRouter.post("/signin", authController.signIn);
authRouter.post("signOut", authController.signOut);

export { authRouter };
