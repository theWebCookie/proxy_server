import express from 'express';
import { fetchRoverPhotosUseCase } from '../usecases/index.js';
import Exception from '../utils/exception.js';

const router = express.Router();

router.post('/rover', async (req, res, next) => {
  try {
    const { userId, userName, apiKey } = req.body;

    const photoUrl = await fetchRoverPhotosUseCase(apiKey);

    return res.json({ userId, userName, photoUrl });
  } catch (error) {
    next(new Exception(error.code, `Error while fetching data: ${error.message}`));
  }
});

export default router;
