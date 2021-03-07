// fetch data from the backend using axios

import axios from "../../config/axios";

export const fetchCharacters = async (page) => {
  console.log("page to fetch", page);
  try {
    const response = await axios.get(`/character?page=${page}`);
    const data = response.data.results;
    const pagesCount = response.data.info.pages;
    return [pagesCount, data];
  } catch (error) {
    throw new Error(error);
  }
};
