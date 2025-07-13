import dotenv from "dotenv";
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("Database URL is not defined");
}
type AppConfig = {
  PORT: string;
  DATABASE_URL: string;
  JWT_SECRET: string;
};
export const config: AppConfig = {
  PORT: process.env.PORT || "1000",
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET as string,
};
