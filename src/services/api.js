import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// 🔹 Cliente base
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000
});

// 🔹 KPIs
export const getKPIs = async () => {
  try {
    const res = await api.get(`/kpis`);
    return res.data;
  } catch (error) {
    console.error("Error KPIs:", error.message);
    return [];
  }
};

// 🔹 Ventas
export const getSales = async () => {
  try {
    const res = await api.get(`/sales`);
    return res.data;
  } catch (error) {
    console.error("Error ventas:", error.message);
    return [];
  }
};

// 🔹 Productos
export const getProducts = async () => {
  try {
    const res = await api.get(`/products`);
    return res.data;
  } catch (error) {
    console.error("Error productos:", error.message);
    return [];
  }
};

// 🔹 Insights IA
export const getInsights = async () => {
  try {
    const res = await api.get(`/insights`);
    return res.data;
  } catch (error) {
    console.error("Error insights:", error.message);
    return { insight: "No se pudieron generar insights." };
  }
};