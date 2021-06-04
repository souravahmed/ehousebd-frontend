import axios from "./config";

const CategoryService = {
  getCategories: async () => {
    try {
      const { data } = await axios.get("product_categories");
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default CategoryService;
