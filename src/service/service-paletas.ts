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

  public static async create (info: any): Promise<paletas> {
    const result = await prisma.paletas.create({ data: info })
    if (!result || result === null) {
      throw new Error('Failed to create new paleta')
    }
    return result
  }

  public static async remove (id: string): Promise<paletas> {
    const result = await prisma.paletas.delete({ where: { id: id } })
    if (result !== null) {
      return result
    } else {
      throw new Error('ID not found')
    }
  }

  public static async update (id: string, info: any): Promise<paletas> {
    const result = await prisma.paletas.update({ where: { id: id }, data: info })
    if (result !== null) {
      return result
    } else {
      throw new Error('ID not found')
    }
  }
}
