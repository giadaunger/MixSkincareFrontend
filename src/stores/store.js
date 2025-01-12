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

  selectedDupeProduct: null,
  setSelectedDupeProduct: (product) => set({ selectedDupeProduct: product }),
  
  selectedCompareProduct: null,
  setSelectedCompareProduct: (product) => set({ selectedCompareProduct: product }),

  firstCompareProduct: null,
  setFirstCompareProduct: (product) => set({ firstCompareProduct: product }),
  
  secondCompareProduct: null,
  setSecondCompareProduct: (product) => set({ secondCompareProduct: product }),

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

  dupesResult: [],
  setDupesResult: (result) => set({ dupesResult: result }),
  fetchDupes: async (product) => {
    try {
      const respons = await fetch(`http://localhost:8000/product/${product}/similar`, {
        method: "GET"
      });
      if(!respons.ok) {
        console.log("Failed find dupes")
        throw new Error("Failed find dupes")
      }
      const data = await respons.json()      
      set({ dupesResult: data })
    } catch (error) {
      console.log("Error finding dupes: ", error)
      set({ errorMsg: "Failed find dupes. Please try again." })
    }
  },

  fetchInitialProducts: async () => {
    try {
      const respons = await fetch("http://localhost:8000/product/ingredients", {
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

  productInfo: null,
  setProductInfo: (result) => set({ productInfo: result}),
  fetchProductInfo: async (id) => {
    try {
      const respons = await fetch(`http://localhost:8000/product/id/${id}`, {
        method: "GET",
      });
      if(!respons.ok) {
        console.log("Failed to fetch product");
        throw new Error("Failed to fetch product");
      }
      const data = await respons.json();
      set({ productInfo: data })
    } catch (error) {
      console.log("Error fetching product: ", error)
    }
  }
}));

export default useStore;
