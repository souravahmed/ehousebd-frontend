import axios from "./config";

const ProductService = {
  getProducts: async ({ sortBy, orderBy, category_slug } = {}) => {
    try {
      const { data } = await axios.get(
        `products/?sort_by=${sortBy}&order_by=${orderBy}&category_slug=${category_slug}`
      );
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  },
  getFeaturedProducts: async () => {
    try {
      const { data } = await axios.get("products/get_featured_products");
      return data;
    } catch (error) {
      throw error;
    }
  },
  getBrandProducts: async (brandSlug) => {
    try {
      const { data } = await axios.get(
        `products/get_brand_products/${brandSlug}`
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
  getProductFilters: async () => {
    try {
      const { data } = await axios.get("products/get_product_filters");
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default ProductService;
