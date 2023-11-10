import create from 'zustand';

const useStore = create((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));

export default useStore;