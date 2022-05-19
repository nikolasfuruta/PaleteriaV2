/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Request, Response } from 'express'
import mongoose from 'mongoose'

export class Validation {
  static idValidation (req: Request, res: Response, next: any): void {
    if (
      !(req.params.id) ||
      mongoose.Types.ObjectId.isValid(req.params.id)
    ) {
      res.status(405).send({ message: 'ID inválido' })
    }
    next()
  }

  static infoValidation (req: Request, res: Response, next: any): void {
    if (
      !(req.body) ||
      !(req.body.sabor) || typeof (req.body.sabor) !== typeof ('') ||
      !(req.body.foto) || typeof (req.body.foto) !== typeof ('') ||
      !(req.body.descricao) || typeof (req.body.descricao) !== typeof ('') ||
      !(req.body.valor) || typeof (req.body.valor) !== typeof (1.0)
    ) {
      res.status(405).send({ message: 'parâmetros do body inválidos' })
    }
    next()
  }
}
