// // npm install @prisma/client
// // lib/prisma.ts
// import { PrismaClient } from "@prisma/client";

// // Singleton function that creates a PrismaClient instance
// const prismaClientSingleton = () => new PrismaClient();

// // Extend the global object with a custom property for Prisma
// declare global {
//   var prismaGlobal: PrismaClient | undefined;
// }

// // Use the existing instance in development to avoid creating multiple clients
// const prisma = global.prismaGlobal ?? prismaClientSingleton();

// if (process.env.NODE_ENV !== "production") {
//   global.prismaGlobal = prisma;
// }

// export default prisma;