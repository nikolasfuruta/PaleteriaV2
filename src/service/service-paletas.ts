import { paletas } from '@prisma/client'
import { prisma } from '../db/prisma-connect'

export class ServicePaletas {
  public static async getAll (): Promise<paletas[]> {
    return await prisma.paletas.findMany()
  }
}
