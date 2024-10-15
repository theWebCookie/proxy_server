import express from 'express'
import { fetchRoverPhotosUseCase } from '../usecases/index.js'
import Exception from '../utils/exception.js'
import { roverSchema } from '../schema/roverSchema.js'
import { validate } from '../middleware/validation.js'

const router = express.Router()

router.get('/rover/form', (req, res) => res.render('rover/roverForm.njk'))

router.post('/rover', validate(roverSchema), async (req, res, next) => {
  try {
    const { userId, userName, apiKey } = req.body

    const photo = await fetchRoverPhotosUseCase(apiKey)

    return res.render('rover/roverPhoto.njk', { userId, userName, photo })
  } catch (error) {
    next(
      new Exception(error.code, `Error while fetching data: ${error.message}`)
    )
  }
})

export default router
