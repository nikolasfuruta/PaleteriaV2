import { paletas } from '@prisma/client'
import { prisma } from '../db/prisma-connect'

export class ServicePaletas {
  public static async getAll (): Promise<paletas[]> {
    return await prisma.paletas.findMany()
  }

  public static async getOne (id: string): Promise<paletas> {
    const result = await prisma.paletas.findUnique({ where: { id: id } })
    if (result !== null) {
      return result
    } else {
      throw new Error('ID not found')
    }
  }
}
