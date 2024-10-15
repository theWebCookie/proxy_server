import { getRoverPhotos } from '../repository/index.ts'

export const fetchRoverPhotosUseCase = async (apiKey: string) => {
  return await getRoverPhotos(1000, apiKey)
}
