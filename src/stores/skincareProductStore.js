import { create } from "zustand";

const API_URL = import.meta.env.VITE_API_URL;

const skincareStore = create((set) => ({

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
      const respons = await fetch(`${API_URL}/product/${chosenProduct}`, {
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
      set({ isLoading: true });
      const response = await fetch(`${API_URL}/ml-compatibility/${product1_id}/${product2_id}`, {
        method: "POST",
      });
      if(!response.ok) {
        throw new Error("Failed to predict compatibility with ML model")
      }
      const data = await response.json()
      console.log("data: ", data);
      
      set({ analysisResult: data, isLoading: false })
      return data;
    } catch (error) {
      console.log("Error predicting compatibility: ", error)
      set({ errorMsg: "Failed to predict compatibility. Please try again.", isLoading: false })
      return null;
    }
  },
/*   analyzeCompatibility: async (product1_id, product2_id) => {
    try {
      const respons = await fetch(`${API_URL}/analyze-compatibility/${product1_id}/${product2_id}`, {
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
  }, */

  dupesResult: null,
  setDupesResult: (result) => set({ dupesResult: result }),
  fetchDupes: async (product) => {
    try {
      const respons = await fetch(`${API_URL}/product/${product}/similar`, {
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
      const respons = await fetch(`${API_URL}/product/ingredients`, {
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
      const respons = await fetch(`${API_URL}/product/id/${id}`, {
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
  },
}));

export default skincareStore;
