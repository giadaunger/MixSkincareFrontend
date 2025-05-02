import { create } from "zustand";

const API_URL = import.meta.env.VITE_API_URL;

const statsStore = create((set) => ({
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
  fetchPopularProducts: async (limit = 15) => {
    try {
      set({ isLoading: true });
      const response = await fetch(`${API_URL}/popular-products?limit=${limit}`, {
        method: "GET",
      });
      if (!response.ok) {
        console.log("Failed to fetch popular products");
        throw new Error("Failed to fetch popular products");
      }
      const data = await response.json();
      set({ popularProducts: data, isLoading: false });
    } catch (error) {
      console.log("Error fetching popular products: ", error);
      set({ isLoading: false, errorMsg: "Failed to fetch popular products." });
    }
  },
}));

export default statsStore;