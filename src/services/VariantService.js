import axios from "./config";

const VariantService = {
  getVariantsByCategorySlug: async (categorySlug) => {
    try {
      const { data } = await axios.get(`product_variants/${categorySlug}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default VariantService;
