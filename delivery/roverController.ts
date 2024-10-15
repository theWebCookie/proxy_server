import express, { Request, Response, NextFunction } from 'express'
import { fetchRoverPhotosUseCase } from '../usecases/index'
import Exception from '../utils/exception'
import { roverSchema } from '../schema/roverSchema'
import { validate } from '../middleware/validation'

const router = express.Router()

router.get('/rover/form', (req, res) => res.render('rover/roverForm.njk'))

router.post(
  '/rover',
  validate(roverSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, userName, apiKey } = req.body

      const photo = await fetchRoverPhotosUseCase(apiKey)

      return res.render('rover/roverPhoto.njk', { userId, userName, photo })
    } catch (error: any) {
      next(
        new Exception(error.code, `Error while fetching data: ${error.message}`)
      )
    }
  }
)

export default router