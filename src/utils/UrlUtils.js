const domain = "http://localhost:8000";

const UrlUtils = {
  domain: domain,
  baseUrl: domain + "/api/",

  joinMediaUrl: (path) => {
    return domain + path;
  },

  getCarouselId: () => {
    return "carousel_" + Math.random().toString(36).substr(2, 5);
  },
};

export default UrlUtils;
