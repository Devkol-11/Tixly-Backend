import express from "express";
import { authRouter } from "./routes/authRoutes";
import { globalErrorHandler } from "./errors/globalErrorHandler";

const app = express();

app.use(express.json());

app.use("api/auth", authRouter);

app.use(globalErrorHandler);
