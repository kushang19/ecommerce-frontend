import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/products";

export const getAllProducts = async (filters = {}) => {
  return axios.get(API_BASE_URL, { params: filters });
};

export const getProductById = async (id) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};
