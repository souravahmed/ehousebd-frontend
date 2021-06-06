import axios from "./config";

const ProductService = {
  getProducts: async ({ sortBy, orderBy, filterBy } = {}) => {
    try {
      const { data } = await axios.get(
        `products/?sort_by=${sortBy}&order_by=${orderBy}&filter_by=${filterBy}`
      );
      console.log(sortBy);
      console.log(orderBy);
      console.log(filterBy);
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default ProductService;
