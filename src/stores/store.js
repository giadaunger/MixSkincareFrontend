import { create } from "zustand";

const useStore = create((set) => ({
  isPopupOpen: false,
  setIsPopupOpen: (value) => set({ isPopupOpen: value }),

  chosenProduct: "",
  fetchProduct: async (chosenProduct) => {
    try {
      const respons = await fetch(`http://localhost:8000/product/ingredients/${chosenProduct}`, {
        method: "GET",
      });
      if(!respons.ok) {
        console.log("Failed to fetch product");
        throw new Error("Failed to fetch product");
      }
      const chosenUserProduct = await respons.json();
      set({ chosenProduct: chosenUserProduct })
    } catch (error) {
      console.log("Error fetching product: ", error)
    }
  }
}));

export default useStore;
