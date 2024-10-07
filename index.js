import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const nasaUrl = `${process.env.NASA_API_URL}?start_date=${process.env.START_DATE}&end_date=${process.env.END_DATE}&api_key=${process.env.NASA_API_KEY}`;

axios
  .get(nasaUrl)
  .then((response) => {
    const data = response.data;
    console.log(JSON.stringify(data, null, 2));
    console.log('Number of asteroids seen:', data.element_count);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
