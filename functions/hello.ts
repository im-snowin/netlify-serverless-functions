import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const handler = async (event, context) => {
  // const users = await prisma.user.findMany()

  return {
    statusCode: 200,
    body: JSON.stringify("users"),
  };
};
