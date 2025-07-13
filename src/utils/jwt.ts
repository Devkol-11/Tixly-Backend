import jwt from "jsonwebtoken";
import { config } from "../config/config";

export function generateAccessToken(id: string): string {
  const secret_key = config.JWT_SECRET;
  const token = jwt.sign(id, secret_key, { expiresIn: "1hr" });
  return token;
}
