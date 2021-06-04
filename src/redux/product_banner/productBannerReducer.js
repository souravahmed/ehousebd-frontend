import {
  FETCH_PRODUCT_BANNER_FAILED,
  FETCH_PRODUCT_BANNER_REQUEST,
  FETCH_PRODUCT_BANNER_SUCCESS,
} from "./productBannerActionType";

const initialState = {
  loading: false,
  productBanners: [],
  error: "",
};

export const ProductBannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_BANNER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_BANNER_SUCCESS:
      return {
        ...state,
        loading: false,
        productBanners: action.payload,
      };
    case FETCH_PRODUCT_BANNER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
