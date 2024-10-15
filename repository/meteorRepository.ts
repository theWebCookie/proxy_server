import axios from 'axios'
import { config } from '../config/index.ts'

export const getMeteorData = async (
  startDate: Date,
  endDate: Date
): Promise<any> => {
  const response = await axios.get(config.nasaUrl, {
    params: {
      startDate,
      endDate
    }
  })
  return response.data.near_earth_objects
}
