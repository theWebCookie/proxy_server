import axios from 'axios'
import { config } from '../config/index.js'

export const getRoverPhotos = async (sol, apiKey) => {
  const response = await axios.get(config.roverUrl, {
    params: {
      sol,
      api_key: apiKey
    }
  })
  return response.data.photos[0]
}
