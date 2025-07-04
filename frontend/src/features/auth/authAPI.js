import api from "../../services/api";

export const loginUserAPI = (credentials) => api.post("/login", credentials);
export const fetchProfileAPI = () => api.get("/student/profile");
