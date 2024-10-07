import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

const nasaUrl = `${process.env.NASA_API_URL}?start_date=${process.env.START_DATE}&end_date=${process.env.END_DATE}&api_key=${process.env.NASA_API_KEY}`;

app.get('/meteors', async (req, res) => {
  try {
    const response = await axios.get(nasaUrl);
    const meteorData = response.data;
    res.json(meteorData);
  } catch (error) {
    console.error('Error fetching meteor data:', error);
    res.status(500).json({ error: 'Error fetching meteor data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
