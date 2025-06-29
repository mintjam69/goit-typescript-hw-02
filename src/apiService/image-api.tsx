import axios, { AxiosResponse } from "axios";
import { ImageResponse } from "./image-api.types";

const API_KEY = "9w97Pb99jXHhNYoe8GBo9dM00UNydqvm8EukWNyUwo0";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

const fetchImages = async (
  currentPage: number,
  searchQuery: string
): Promise<ImageResponse> => {
  const response: AxiosResponse<ImageResponse> = await axios.get("", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 15,
      orientation: "landscape",
      client_id: API_KEY,
    },
  });
  return response.data;
};

export default fetchImages;
