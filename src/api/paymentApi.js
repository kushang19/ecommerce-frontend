import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/payment";

export const createRazorpayOrder = async (amount, token) => {
  return axios.post(`${API_BASE_URL}/razorpay-order`, { amount }, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const verifyPayment = async (paymentData, token) => {
  return axios.post(`${API_BASE_URL}/verify-payment`, paymentData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
