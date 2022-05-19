/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Request, Response } from 'express'
import mongoose from 'mongoose'

export class Validation {
  static idValidation (req: Request, res: Response, next: any): void {
    if (
      !(req.params.id) ||
      !mongoose.Types.ObjectId.isValid(req.params.id)
    ) {
      throw new Error('ID inválido')
    }
    next()
  }

  static infoValidation (req: Request, res: Response, next: any): void {
    if (
      !(req.body) ||
      !(req.body.sabor) || typeof (req.body.sabor) !== typeof ('') ||
      !(req.body.descricao) || typeof (req.body.descricao) !== typeof ('') ||
      !(req.body.foto) || typeof (req.body.foto) !== typeof ('') ||
      !(req.body.preco) || typeof (req.body.preco) !== typeof (1.0)
    ) {
      throw new Error('Parâmetros do body inválidos')
    }
    next()
  }
}
