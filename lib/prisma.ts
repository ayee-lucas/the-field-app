import { PrismaClient } from '@prisma/client';

declare global {
  var prismaDev: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prismaDev) {
    global.prismaDev = new PrismaClient();
  }
  prisma = global.prismaDev;
}

export default prisma;
