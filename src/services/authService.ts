import * as db from "../repositories/repo";
import * as crypto from "../utils/crypto";
import * as jwt from "../utils/jwt";
import {
  serviceSignUpInput,
  serviceSignUpOutput,
  serviceSignInInput,
  serviceSignInOutput,
} from "../types/authTypes/authServiceTypes";
import { AppError } from "../errors/appError";

export async function signUp(
  input: serviceSignUpInput
): Promise<serviceSignUpOutput> {
  try {
    const { fullName, email, password } = input;
    const userExists = await db.checkExistingUser(email);
    if (userExists) {
      throw new AppError("User already exists", 404);
    }
    const hashedPassword = await crypto.hashPassword(password);
    const newUser = await db.createUser({ fullName, email, hashedPassword });
    if (!newUser) {
      throw new AppError("User not created", 404);
    }
    const accessToken = jwt.generateAccessToken(newUser.id);
    return {
      id: newUser.id,
      fullName: newUser.fullName,
      email: newUser.email,
      accessToken,
    };
  } catch (err) {
    // Convert all unexpected errors to AppError
    if (!(err instanceof AppError)) {
      throw new AppError("Something went wrong during sign up", 500);
    }
    throw err;
  }
}
export async function signIn(
  input: serviceSignInInput
): Promise<serviceSignInOutput> {
  try {
    const { fullName, email, password } = input;
    const userExists = await db.checkExistingUser(email);
    if (!userExists) {
      throw new AppError("User not found", 404);
    }
    const comparePassword = await crypto.comparePassword(
      password,
      userExists.password
    );
    if (!comparePassword) {
      throw new AppError("Invalid Password", 404);
    }
    const token = jwt.generateAccessToken(userExists.id);
    return {
      fullName,
      email,
      accessToken: token,
    };
  } catch (err) {
    // Convert all unexpected errors to AppError
    if (!(err instanceof AppError)) {
      throw new AppError("Something went wrong during sign up", 500);
    }
    throw err;
  }
}

export async function signOut() {}
