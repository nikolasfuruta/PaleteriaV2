import { Router } from 'express'
import { Validation } from '../middleware/validations'
import { ControllerPaletas } from '../controller/paletas-controller'

const router = Router()

router
  .route('/paletas')
  .get(ControllerPaletas.getAll)
  .post(Validation.infoValidation, ControllerPaletas.create)

router
  .route('/paletas/:id')
  .get(Validation.idValidation, ControllerPaletas.getOne)
  .put(Validation.idValidation, Validation.infoValidation)
  .delete(Validation.idValidation, ControllerPaletas.remove)

export { router }
