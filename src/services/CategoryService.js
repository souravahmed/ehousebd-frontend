import axios from "./config";

const CategoryService = {
  getCategories: async () => {
    try {
      const { data } = await axios.get("categories");
      return data;
    } catch (error) {
      throw error;
    }
  },
  getFeaturedCategories: async () => {
    try {
      const { data } = await axios.get("categories/get_feature_categories");
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default CategoryService;
