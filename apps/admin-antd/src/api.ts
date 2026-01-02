import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3007"
});

api.interceptors.request.use((config) => {
  const key = process.env.REACT_APP_ADMIN_KEY || "changeme-admin-key";
  config.headers = { ...config.headers, "x-admin-key": key };
  return config;
});

export default api;
