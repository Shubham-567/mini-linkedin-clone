import api from "./api";

export const createPost = async (text) => {
  
  const res = await api.post("/posts", { text });
  return res.data;
};

export const getAllPost = async () => {
  const res = await api.get("/posts");
  return res.data;
};
