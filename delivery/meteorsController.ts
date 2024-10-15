import express, { Request, Response, NextFunction } from 'express'
import { fetchMeteorsUseCase } from '../usecases/index'
import Exception from '../utils/exception'
import { meteorSchema } from '../schema/meteorSchema'
import { validate } from '../middleware/validation'

const router = express.Router()

router.get(
  '/meteors',
  validate(meteorSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { startDate, endDate, count, wereDangerousMeteors } = req.query

      const meteorList = await fetchMeteorsUseCase(
        startDate as unknown as Date,
        endDate as unknown as Date,
        Boolean(count),
        Boolean(wereDangerousMeteors)
      )
      res.render('meteor/meteors.njk', meteorList)
    } catch (error: any) {
      next(
        new Exception(error.code, `Error while fetching data: ${error.message}`)
      )
    }
  }
)

export default router
