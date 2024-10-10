import express from 'express';
import { fetchMeteorsUseCase } from '../usecases/fetchMeteors.js';
import Exception from '../utils/exception.js';

const router = express.Router();

router.get('/meteors', async (req, res, next) => {
  try {
    const { startDate, endDate, count, wereDangerousMeteors } = req.query;

    const meteorList = await fetchMeteorsUseCase(startDate, endDate, Boolean(count), Boolean(wereDangerousMeteors));
    res.json(meteorList);
  } catch (error) {
    next(new Exception(error.code, `Error while fetching data: ${error.message}`));
  }
});

export default router;
