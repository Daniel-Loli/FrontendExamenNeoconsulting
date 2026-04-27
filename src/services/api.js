import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getKPIs = () => axios.get(`${API_URL}/kpis`);
export const getSales = () => axios.get(`${API_URL}/sales`);
export const getProducts = () => axios.get(`${API_URL}/products`);
export const getInsights = () => axios.get(`${API_URL}/insights`);