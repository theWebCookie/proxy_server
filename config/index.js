import dotenv from 'dotenv';

dotenv.config();

export const config = {
  nasaUrl: `${process.env.NASA_API_URL}?api_key=${process.env.NASA_API_KEY}`,
  port: process.env.PORT || 4000,
};
