import axios from 'axios';
import { ImageResponse } from './image-api.types';

const API_KEY = 'mskXwYk7bCouuxf64aJE3hOqbVNI95fUDMc0-66QkWM';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';

const fetchImages = async (
  currentPage: number,
  searchQuery: string
): Promise<ImageResponse> => {
  const response = await axios.get<ImageResponse>('', {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 15,
      orientation: 'landscape',
      client_id: API_KEY,
    },
  });

  return response.data;
};

export default fetchImages;
