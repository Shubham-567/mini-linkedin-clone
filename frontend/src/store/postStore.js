import { create } from "zustand";

const userPostStore = create((set) => ({
  posts: [],
  loading: false,

  // set posts
  setPosts: (data) => set({ posts: data }),

  // add new post
  addPost: (newPost) =>
    set((state) => ({
      posts: [newPost, ...state.posts],
    })),

  setLoading: (bool) => set({ loading: bool }),
}));

export default userPostStore;
