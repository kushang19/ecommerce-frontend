import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/orders";

export const placeOrder = async (orderData, token) => {
  return axios.post(API_BASE_URL, orderData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getUserOrders = async (token) => {
  return axios.get(API_BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
