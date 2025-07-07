import axios from "axios";

const api = axios.create({
  baseURL: "https://f7da-103-16-29-169.ngrok-free.app/api/v1/",
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
