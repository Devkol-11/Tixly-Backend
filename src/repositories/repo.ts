import { prisma } from "../db/prisma";
import {
  existingUserOutput,
  createUserInput,
  createUserOutput,
} from "../types/authTypes/authRepoTypes";
export async function checkExistingUser(
  email: string
): Promise<existingUserOutput | null> {
  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      password: true,
    },
  });

  return userExists;
}

export async function createUser(
  input: createUserInput
): Promise<createUserOutput> {
  const { fullName, email, hashedPassword } = input;
  const newUser = await prisma.user.create({
    data: {
      fullName,
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      fullName: true,
      email: true,
    },
  });
  return newUser;
}
