import axios from 'axios'
import { config } from '../config/index.ts'

export const getRoverPhotos = async (sol: number, apiKey: string) => {
  const response = await axios.get(config.roverUrl, {
    params: {
      sol,
      api_key: apiKey
    }
  })
  return response.data.photos[0]
}
