import axios from "./config";

const ProductService = {
  getProducts: async ({ sortBy, orderBy, filterBy, category_slug } = {}) => {
    try {
      const { data } = await axios.get(
        `products/?sort_by=${sortBy}&order_by=${orderBy}&filter_by=${filterBy}&category_slug=${category_slug}`
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default ProductService;
