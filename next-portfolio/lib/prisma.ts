// npm install prisma @prisma/client@latest @prisma/extension-accelerate@latest
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;