import { create } from "zustand";

const useStore = create((set) => ({
  errorMsg: "",
  setErrorMsg: (value) => set({ errorMsg: value }),

  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),

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

  analysisResult: null,
  setAnalysisResult: (result) => set({ analysisResult: result}),
  analyzeCompatibility: async (product1_id, product2_id) => {
    try {
      const respons = await fetch(`http://localhost:8000/analyze-compatibility/${product1_id}/${product2_id}`, {
        method: "POST",
      });
      if(!respons.ok) {
        console.log("Failed to analyze products")
        throw new Error("Failed to analyze products")
      }
      const data = await respons.json()
      set({ analysisResult: data })
    } catch (error) {
      console.log("Error analyzing products: ", error)
      set({ errorMsg: "Failed to analyze products. Please try again." })
    }
  },

  fetchInitialProducts: async () => {
    try {
      const respons = await fetch("http://localhost:8000/product", {
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
  }
}));

export default useStore;
