import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

async function main (): Promise<void> {
  // Connect the client
  const conn = await prisma.$connect()
  if (conn !== null) {
    console.log('Connected to the MongoDB')
  }
  // ... you will write your Prisma Client queries here
}

async function connectDB (): Promise<void> {
  try {
    await main()
  } catch (err) {
    console.error(err)
  } finally {
    await prisma.$disconnect()
  }
}

export default connectDB
