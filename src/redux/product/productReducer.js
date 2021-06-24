import {
  FETCH_BRAND_PRODUCTS_FAILED,
  FETCH_BRAND_PRODUCTS_REQUEST,
  FETCH_BRAND_PRODUCTS_SUCCESS,
  FETCH_FEATURED_PRODUCTS_FAILED,
  FETCH_FEATURED_PRODUCTS_REQUEST,
  FETCH_FEATURED_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_FILTERS_FAILED,
  FETCH_PRODUCT_FILTERS_REQUEST,
  FETCH_PRODUCT_FILTERS_SUCCESS,
} from "./productActionType";

const initialState = {
  loading: false,
  error: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      const slug = action.category_slug;
      return {
        ...state,
        loading: false,
        [`${slug}`]: action.payload,
      };
    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    // end of fetch products

    case FETCH_FEATURED_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FEATURED_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        featuredProducts: action.payload,
      };
    case FETCH_FEATURED_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    // end of featured products

    case FETCH_BRAND_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BRAND_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        brandProducts: action.payload,
      };
    case FETCH_BRAND_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    // end of brand products

    case FETCH_PRODUCT_FILTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_FILTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        productFilters: action.payload,
      };
    case FETCH_PRODUCT_FILTERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
