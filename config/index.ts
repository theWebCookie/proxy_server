import dotenv from 'dotenv'

dotenv.config()

const { NASA_API_BASE_URL, NASA_API_KEY, PORT } = process.env

export const config = {
  nasaUrl: `${NASA_API_BASE_URL}/neo/rest/v1/feed?api_key=${NASA_API_KEY}`,
  roverUrl: `${NASA_API_BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos`,
  port: PORT || 4000
}
