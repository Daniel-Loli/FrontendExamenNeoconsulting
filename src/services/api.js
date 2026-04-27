import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getKPIs = (lang = "es") =>
  axios.get(`${API_URL}/kpis?lang=${lang}`);

export const getSales = () =>
  axios.get(`${API_URL}/sales`);

export const getProducts = (lang = "es") =>
  axios.get(`${API_URL}/products?lang=${lang}`);

export const getInsights = () =>
  axios.get(`${API_URL}/insights`);