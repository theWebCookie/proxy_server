import dotenv from 'dotenv';

dotenv.config();

export const config = {
  nasaUrl: `${process.env.NASA_API_URL}?api_key=${process.env.NASA_API_KEY}`,
  roverUrl: `${process.env.ROVER_API_URL}`,
  port: process.env.PORT || 4000,
};
