import axios from "./config";

const BannerService = {
  getBanners: async () => {
    try {
      const { data } = await axios.get("banners");
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default BannerService;
