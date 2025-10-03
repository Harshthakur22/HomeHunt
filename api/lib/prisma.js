import { PrismaClient } from "@prisma/client";

// Reuse a single Prisma client across hot reloads and serverless invocations
const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
