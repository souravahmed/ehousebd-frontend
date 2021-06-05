import axios from "./config";

const ProductService = {
  getLatestProducts: async () => {
    try {
      const { data } = await axios.get("products");
      return data;
    } catch (error) {
      throw error;
    }
  },
  getProductsByCategory: async (categorySlug) => {
    try {
      const { data } = await axios.get(`products/${categorySlug}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default ProductService;
