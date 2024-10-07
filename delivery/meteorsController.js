import express from 'express';
import { fetchMeteorsUseCase } from '../usecases/fetchMeteors.js';

const router = express.Router();

router.get('/meteors', async (req, res) => {
  try {
    const meteorList = await fetchMeteorsUseCase();
    res.json(meteorList);
  } catch (error) {
    console.error('Error in /meteors route:', error);
    res.status(500).json({ error: 'Failed to fetch meteor data' });
  }
});

export default router;
