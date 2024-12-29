import { create } from "zustand";

const useStore = create((set) => ({
  closePopUp: false,
  setClosePopUp: () => set({ closePopUp: true }),
}));

export default useStore;
