import axios from 'axios';
import { config } from '../config/index.js';

export const getMeteorData = async () => {
  const response = await axios.get(config.nasaUrl);
  return response.data.near_earth_objects;
};
