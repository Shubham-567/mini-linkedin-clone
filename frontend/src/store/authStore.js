import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,

  // login
  login: (userData, token) => {
    localStorage.setItem("token", token);
    set({ user: userData, token });
  },

  // logout
  logout: () => {
    localStorage.removeItem(token);
    set({ user: null, token: null });
  },

  // set user (form token validation)
  setUser: (userData) => set({ user: userData }),
}));

export default useAuthStore;
