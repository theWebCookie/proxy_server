import { getRoverPhotos } from '../repository/index.js';

export const fetchRoverPhotosUseCase = async (apiKey) => {
  return await getRoverPhotos(1000, apiKey);
};
