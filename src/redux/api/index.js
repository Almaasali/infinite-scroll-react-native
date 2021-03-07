// fetch data from the backend using axios

import axios from "../../config/axios";

export const fetchCharacters = async (page) => {
  try {
    const response = await axios.get(`/character?${page}`);
    const data = response.data.results;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
