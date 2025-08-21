import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5174/api/v1/",
  baseURL: "https://6e1a53647dbe.ngrok-free.app/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
