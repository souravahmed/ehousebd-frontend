import Axios from "axios";
import UrlUtils from "../utils/UrlUtils";

const instance = Axios.create({
  baseURL: UrlUtils.baseUrl,
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export default instance;
