const domain = "http://localhost:8000";

const UrlUtils = {
  domain: domain,
  baseUrl: domain + "/api/",

  joinMediaUrl: (path) => {
    return domain + path;
  },

  getUrlLastPath: (path) => {
    console.log(path);
    const index = path.lastIndexOf("/");
    console.log(path.substring(0, index));
    return path.substring(0, index);
  },
};

export default UrlUtils;
