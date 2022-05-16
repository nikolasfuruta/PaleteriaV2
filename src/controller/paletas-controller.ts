// import { Request, Response } from 'express'
import { ServicePaletas } from '../service/service-paletas'

export class ControllerPaletas {
  constructor (private readonly servicePaletas: ServicePaletas) {}

  // static async findAll (req: Request, res: Response): Promise<void> {
  //   try {
  //     const result = await servicePaletas
  //   } catch (e) {
  //     console.error(e)
  //     res.status(400).send({ message: 'Nenhuma paleta encontrada' })
  //   }
  // }

  // static async findOne (req: Request, res: Response): Promise<void> {
  //   try {
  //     const result = await servicePaletas
  //   } catch (e) {
  //     console.error(e)
  //     res.status(400).send({ message: 'Paleta não encontrada' })
  //   }
  // }

  // static async create (req: Request, res: Response): Promise<void> {
  //   try {
  //     const result = await servicePaletas
  //   } catch (e) {
  //     console.error(e)
  //     res.status(400).send({ message: 'Paleta não adicionada' })
  //   }
  // }

  // static async update (req: Request, res: Response): Promise<void> {
  //   try {
  //     const result = await servicePaletas
  //   } catch (e) {
  //     console.error(e)
  //     res.status(400).send({ message: 'Paleta não atualizada' })
  //   }
  // }

  // static async remove (req: Request, res: Response): Promise<void> {
  //   try {
  //     const result = await servicePaletas
  //   } catch (e) {
  //     console.error(e)
  //     res.status(400).send({ message: 'Paleta não deletada' })
  //   }
  // }
}
