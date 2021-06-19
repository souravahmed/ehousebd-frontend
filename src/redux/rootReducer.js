import { combineReducers } from "redux";
import { categoryReducer } from "./category/categoryReducer";
import { productReducer } from "./product/productReducer";
import { ProductBannerReducer } from "./product_banner/productBannerReducer";
import { variantReducer } from "./product_variant/variantReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  // productBanner: ProductBannerReducer,
  // product: productReducer,
  // variantByCategory: variantReducer,
});

export default rootReducer;
