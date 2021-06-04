import { combineReducers } from "redux";
import { categoryReducer } from "./category/categoryReducer";
import { productReducer } from "./product/productReducer";
import { ProductBannerReducer } from "./product_banner/productBannerReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  productBanner: ProductBannerReducer,
  product: productReducer,
});

export default rootReducer;
