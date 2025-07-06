import api from "../../Services/api.js";

export const loginUserAPI = (credentials) =>
  api.post("/auth/login", credentials);
export const fetchProfileByEmail = (email) =>
  api.get(`/student/email/${email}`);
