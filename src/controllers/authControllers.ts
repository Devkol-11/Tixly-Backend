import { Request, response, Response } from "express";
import * as authService from "../services/authService";
import {
  controllerSignUpInput,
  controllerSignInInput,
} from "../types/authTypes/authControllerTypes";

export async function signUp(
  req: Request<{}, {}, controllerSignUpInput>,
  res: Response
): Promise<void> {
  try {
    const { fullName, email, password } = req.body;
    const response = await authService.signUp({ fullName, email, password });
    res.status(201).json({
      success: true,
      message: "SignUp Successful",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error , User not created",
      error: error,
    });
  }
}
export async function signIn(
  req: Request<{}, {}, controllerSignInInput>,
  res: Response
): Promise<void> {
  try {
    const { fullName, email, password } = req.body;
    const response = await authService.signIn({ fullName, email, password });
    res.status(200).json({
      success: true,
      message: "SignIn Successful",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server Error , SignIn failure",
      error: error,
    });
  }
}
export async function signOut() {}
