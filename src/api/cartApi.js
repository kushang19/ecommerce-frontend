import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/cart";

export const getCart = async (token) => {
  return axios.get(API_BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addToCart = async (productId, token) => {
  return axios.post(`${API_BASE_URL}/add`, { productId }, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const removeFromCart = async (productId, token) => {
  return axios.delete(`${API_BASE_URL}/remove/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const clearCart = async (token) => {
  return axios.delete(`${API_BASE_URL}/clear`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
