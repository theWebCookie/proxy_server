import dotenv from 'dotenv';

dotenv.config();

export const config = {
  nasaUrl: `${process.env.NASA_API_URL}?start_date=${process.env.START_DATE}&end_date=${process.env.END_DATE}&api_key=${process.env.NASA_API_KEY}`,
  port: process.env.PORT || 4000,
};
