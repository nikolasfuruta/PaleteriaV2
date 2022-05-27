import { Request, Response } from 'express'
import { ServicePaletas } from '../service/service-paletas'

export class ControllerPaletas {
  constructor (private readonly servicePaletas: ServicePaletas) {}

  static async getAll (req: Request, res: Response): Promise<void> {
    try {
      const result = await ServicePaletas.getAll()
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
      res.status(400).send({ message: 'Nenhuma paleta encontrada' })
    }
  }

  static async getOne (req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id
      const result = await ServicePaletas.getOne(id)
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
      res.status(400).send({ message: 'Paleta não encontrada' })
    }
  }

  static async create (req: Request, res: Response): Promise<void> {
    try {
      const info = req.body
      const result = await ServicePaletas.create(info)
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
      res.status(400).send({ message: 'Paleta não adicionada' })
    }
  }

  static async update (req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id
      const info = req.body
      const result = await ServicePaletas.update(id, info)
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
      res.status(400).send({ message: 'Paleta não encontrada' })
    }
  }

  static async remove (req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id
      const result = await ServicePaletas.remove(id)
      res.status(200).send(result)
    } catch (e) {
      console.error(e)
      res.status(400).send({ message: 'Paleta não encontrada' })
    }
  }
}
