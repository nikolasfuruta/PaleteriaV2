import { Router, Request, Response } from 'express'

const router = Router()

router
  .route('/paletas')
  .get((req: Request, res: Response) => { res.send({ message: 'conectado' }) })
  .post()

router
  .route('/paletas/:id')
  .get()
  .put()
  .delete()

export { router }
