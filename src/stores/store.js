import { create } from "zustand";

const useStore = create((set) => ({
  isPopupOpen: false,
  setIsPopupOpen: (value) => set({ isPopupOpen: value }),
}));

export default useStore;
