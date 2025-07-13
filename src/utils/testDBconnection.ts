import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function testDbConnection() {
  try {
    console.log("⏳ Connecting to the database...");
    await prisma.$connect();
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error);
  } finally {
    await prisma.$disconnect();
    console.log("🔌 Database connection closed.");
  }
}
