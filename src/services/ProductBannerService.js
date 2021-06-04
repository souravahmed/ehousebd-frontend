import axios from "./config";

const ProductBannerService = {
  getBanners: async () => {
    try {
      const { data } = await axios.get("product_banners");
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default ProductBannerService;
