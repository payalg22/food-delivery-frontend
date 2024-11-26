import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function getAssets(){
    const response = await axios.get(`${API_URL}/assets`);
   //console.log(response.data);
    return response.data;
}

export async function getPopularRestaurants() {
    const response = await axios.get(`${API_URL}/restaurant/popular`);
    console.log(response.data);
    return response.data;
}