import { create } from "zustand";

const API_URL = import.meta.env.VITE_API_URL;

const statsStore = create((set, get) => ({
  trackProductView: async (productId) => {
    try {
      const response = await fetch(`${API_URL}/track/product-view/${productId}`, {
        method: "POST",
      });
      if (!response.ok) {
        console.log("Failed to track product view");
      }
    } catch (error) {
      console.log("Error tracking product view: ", error);
    }
  },
  popularProducts: [],
  frontPageProducts: [],
  isLoading: false,
  offset: 0,
  hasMore: true,
  
  fetchFrontPageProducts: async (limit = 15) => {
    try {
      const response = await fetch(`${API_URL}/front-page-products?limit=${limit}`, {
        method: "GET",
      });
      if (!response.ok) {
        console.log("Failed to fetch popular products");
        throw new Error("Failed to fetch popular products");
      }
      const data = await response.json();
      
      set({ frontPageProducts: data });
    } catch (error) {
      console.log("Error fetching popular products: ", error);
      set({ errorMsg: "Failed to fetch popular products." });
    }
  },

  fetchPopularProducts: async () => {
    try {
      const { offset, popularProducts } = get();
      set({ isLoading: true });
      
      const response = await fetch(`${API_URL}/popular-products?offset=${offset}&limit=30`, {
        method: "GET",
      });
      
      if (!response.ok) {
        console.log("Failed to fetch popular products");
        throw new Error("Failed to fetch popular products");
      }
      
      const data = await response.json();
      
      set({ 
        popularProducts: [...popularProducts, ...data.products], 
        isLoading: false,
        hasMore: data.has_more,
        offset: offset + data.products.length
      });
      
    } catch (error) {
      console.log("Error fetching popular products: ", error);
      set({ isLoading: false, errorMsg: "Failed to fetch popular products." });
    }
  },
  
  resetPagination: () => {
    set({ offset: 0, hasMore: true, popularProducts: [] });
  }
}));

export default statsStore;