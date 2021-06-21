import { combineReducers } from "redux";
import { categoryReducer } from "./category/categoryReducer";
//import { productReducer } from "./product/productReducer";
import { BannerReducer } from "./banner/bannerReducer";
import { BrandReducer } from "./brand/brandReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  banner: BannerReducer,
  brand: BrandReducer,
  // product: productReducer,
  // variantByCategory: variantReducer,
});

export default rootReducer;
