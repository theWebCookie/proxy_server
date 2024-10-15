import express from 'express';
import { fetchMeteorsUseCase } from '../usecases/index.js';
import Exception from '../utils/exception.js';
import { meteorSchema } from '../schema/meteorSchema.js';
import { validate } from '../middleware/validation.js';

const router = express.Router();

router.get('/meteors', validate(meteorSchema), async (req, res, next) => {
  try {
    const { startDate, endDate, count, wereDangerousMeteors } = req.query;

    const meteorList = await fetchMeteorsUseCase(startDate, endDate, Boolean(count), Boolean(wereDangerousMeteors));
    res.render('meteor/meteors.njk', meteorList);
  } catch (error) {
    next(new Exception(error.code, `Error while fetching data: ${error.message}`));
  }
});

export default router;
