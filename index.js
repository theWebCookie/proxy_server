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
    const meteorData = response.data.near_earth_objects;

    const meteorList = [];
    for (const date in meteorData) {
      meteorData[date].forEach((meteor) => {
        meteorList.push({
          id: meteor.id,
          name: meteor.name,
          diameter_meters: meteor.estimated_diameter.meters.estimated_diameter_max,
          is_potentially_hazardous_asteroid: meteor.is_potentially_hazardous_asteroid,
          close_approach_date_full: meteor.close_approach_data[0].close_approach_date_full,
          relative_velocity_km_per_sec: meteor.close_approach_data[0].relative_velocity.kilometers_per_second,
        });
      });
    }

    res.json(meteorList);
  } catch (error) {
    console.error('Error fetching meteor data:', error);
    res.status(500).json({ error: 'Error fetching meteor data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
