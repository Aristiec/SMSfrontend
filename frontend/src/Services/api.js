import axios from "axios";

const api = axios.create({
  baseURL: "https://ebaf0b43591f.ngrok-free.app/api/v1/",
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
