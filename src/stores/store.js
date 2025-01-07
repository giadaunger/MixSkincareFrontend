import { create } from "zustand";

const useStore = create((set) => ({
  isPopupOpen: false,
  setIsPopupOpen: (value) => {
    set({ isPopupOpen: value });
    if (!value) { 
      set({ searchResults: [] }); 
    }
  },

  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),

  searchResults: [],
  setSearchResults: (results) => set({ searchResults: results }),
  fetchSearchedProduct: async (chosenProduct) => {
    try {
      const respons = await fetch(`http://localhost:8000/product/${chosenProduct}`, {
        method: "GET",
      });
      if(!respons.ok) {
        console.log("Failed to fetch product");
        throw new Error("Failed to fetch product");
      }
      const data = await respons.json();
      set({ searchResults: data })
    } catch (error) {
      console.log("Error fetching product: ", error)
    }
  },

}));

export default useStore;
