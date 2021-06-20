import { combineReducers } from "redux";
import { categoryReducer } from "./category/categoryReducer";
//import { productReducer } from "./product/productReducer";
import { BannerReducer } from "./banner/bannerReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  banner: BannerReducer,
  // product: productReducer,
  // variantByCategory: variantReducer,
});

export default rootReducer;
