import axios from "axios";

const api = axios.create({
  baseURL:
    "https://991c-2409-40d0-13a7-4f82-b5d6-a6b2-b17a-78fe.ngrok-free.app/api/v1/",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
