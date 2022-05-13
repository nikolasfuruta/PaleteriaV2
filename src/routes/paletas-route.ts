import { Router } from 'express'
import { Validation } from '../middleware/validations'

const router = Router()

router
  .route('/paletas')
  .get()
  .post(Validation.infoValidation)

router
  .route('/paletas/:id')
  .get(Validation.idValidation)
  .put(Validation.idValidation, Validation.infoValidation)
  .delete(Validation.idValidation)

export { router }
