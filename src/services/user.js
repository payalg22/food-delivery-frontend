import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export async function register(data) {
    try {
      const response = await axios.post(`${API_URL}/user/register`, data, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      });
      //console.log(response.data);
      return response;
    } catch (error) {
      return error.response;
    }
  }

export async function login(data) {
  try {
    const response = await axios.post(`${API_URL}/user/login`, data, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    });
    //console.log(response.data);
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function getUser() {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: token,
      },
    });
    //console.log(response.data);
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function updateUser(details) {
  const data = JSON.stringify(details);
  try {
    const response = await axios.put(`${API_URL}/user/edit`, data, {
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
    });
    
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function addAddress(details) {
    const data = JSON.stringify(details);
    try {
        const response = await axios.post(`${API_URL}/user/address/new`, data, {
            headers: {
              "Content-type": "application/json",
              Authorization: token,
            },
          });
          
          return response;
    } catch (error) {
        return error.response;
    }
}

export async function modifyAddress(details) {
    const data = JSON.stringify(details);
    try {
        const response = await axios.put(`${API_URL}/user/address/edit`, data, {
            headers: {
              "Content-type": "application/json",
              Authorization: token,
            },
          });
          
          return response;
    } catch (error) {
        return error.response;
    }
}

export async function deleteAddress(id) {
    try {
        const response = await axios.delete(`${API_URL}/user/address/delete/${id}`, {
            headers: {
              Authorization: token,
            },
          });
          
          return response;
    } catch (error) {
        return error.response;
    }
}