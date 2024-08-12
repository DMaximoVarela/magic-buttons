import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = new PrismaClient();

if (process.env.NODE !== "production") global.prisma = prisma;
