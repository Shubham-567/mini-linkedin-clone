import api from "./api.js";

export const register = async (userData) => {
  const res = await api.post("/auth/register", userData);
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await api.post("/auth/login", userData);
  return res.data;
};
