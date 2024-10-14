import dotenv from 'dotenv';

dotenv.config();

export const config = {
  nasaUrl: `${process.env.NASA_API_BASE_URL}/neo/rest/v1/feed?api_key=${process.env.NASA_API_KEY}`,
  roverUrl: `${process.env.NASA_API_BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos`,
  port: process.env.PORT || 4000,
};
