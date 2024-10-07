import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

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
