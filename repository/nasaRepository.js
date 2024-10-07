import axios from 'axios';
import { config } from '../config/index.js';

export const getMeteorData = async () => {
  try {
    const response = await axios.get(config.nasaUrl);
    return response.data.near_earth_objects;
  } catch (error) {
    throw new Error('Error fetching data from NASA API: ', error.message);
  }
};
