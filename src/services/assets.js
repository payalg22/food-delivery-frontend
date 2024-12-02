import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function getAssets(){
    const response = await axios.get(`${API_URL}/assets`);
   //console.log(response.data);
    return response.data;
}

export async function getCategories() {
    const response = await axios.get(`${API_URL}/restaurant/categories`);
    //console.log(response.data);
    return response.data;
}

export async function getStateList() {
    const response = await axios.get(`${API_URL}/states`);
    //console.log(response.data);
    return response.data;
}

export async function getReviews() {
    const response = await axios.get(`${API_URL}/reviews`);

    return response.data;
}