import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function getPopularRestaurants() {
  const response = await axios.get(`${API_URL}/restaurant/popular`);
  //console.log(response.data);
  return response.data;
}

export async function getOtherRestaurants() {
  const response = await axios.get(`${API_URL}/restaurant/others`);
  //console.log(response.data);
  return response.data;
}

export async function getRestaurantInfo(id) {
  try {
    const response = await axios.get(`${API_URL}/restaurant/info/${id}`);
    //console.log(response.data);
    return response;
  } catch (err) {
    return err.response;
  }
}
