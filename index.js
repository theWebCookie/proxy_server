import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const nasaUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-06-30&end_date=2024-07-04&api_key=${process.env.NASA_API_KEY}`;

axios
  .get(nasaUrl)
  .then((response) => {
    const data = response.data;
    console.log(JSON.stringify(data, 0, 1));
    console.log('Number of asteroids seen:', data.element_count);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
