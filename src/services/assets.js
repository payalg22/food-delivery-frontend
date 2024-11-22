import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function getAssets(){
    const response = await axios.get(`${API_URL}/assets`);

    return response.data;
}