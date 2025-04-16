import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export async function getCart() {
  try {
    const response = await axios.get(`${API_URL}/cart`, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function addToCart(id) {
  try {
    const response = await axios.post(
      `${API_URL}/cart/add/${id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function removeFromCart(id) {
  try {
    const response = await axios.delete(`${API_URL}/cart/delete/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function clearCart() {
  try {
    const response = await axios.delete(`${API_URL}/cart/clear`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}
