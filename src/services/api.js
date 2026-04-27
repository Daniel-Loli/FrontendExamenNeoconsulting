import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getKPIs = () => axios.get(`${API_URL}/kpis`);
export const getSales = () => axios.get(`${API_URL}/sales`);
export const getProducts = () => axios.get(`${API_URL}/products`);
export const getInsights = () => axios.get(`${API_URL}/insights`);
export const getFunnel = () => axios.get(`${API_URL}/funnel`);
export const getInventory = () => axios.get(`${API_URL}/inventory`);
export const getLogistics = () => axios.get(`${API_URL}/logistics`);
export const getCustomers = () => axios.get(`${API_URL}/customers`);