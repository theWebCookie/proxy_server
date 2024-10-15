import axios from 'axios'
import { config } from '../config/index.js'

export const getMeteorData = async (startDate, endDate) => {
  const response = await axios.get(config.nasaUrl, {
    params: {
      startDate,
      endDate
    }
  })
  return response.data.near_earth_objects
}
