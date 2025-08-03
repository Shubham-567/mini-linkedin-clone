import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

const tokenFromStorage = localStorage.getItem("token");
let userFromToken = null;

if (tokenFromStorage) {
  try {
    const decoded = jwtDecode(tokenFromStorage);
    userFromToken = decoded;
  } catch (error) {
    console.error("Invalid token: ", error);
    localStorage.removeItem("token");
  }
}

const useAuthStore = create((set) => ({
  user: userFromToken,
  token: tokenFromStorage,

  // login
  login: (userData, token) => {
    localStorage.setItem("token", token);
    set({ user: userData, token });
  },

  // logout
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },

  // set user (form token validation)
  setUser: (userData) => set({ user: userData }),
}));

export default useAuthStore;
