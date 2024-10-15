import { getRoverPhotos } from '../repository/index'

export const fetchRoverPhotosUseCase = async (apiKey: string) => {
  return await getRoverPhotos(1000, apiKey)
}
