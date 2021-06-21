import axios from "./config";

const BrandService = {
  getBrands: async () => {
    try {
      const { data } = await axios.get("brands");
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default BrandService;
