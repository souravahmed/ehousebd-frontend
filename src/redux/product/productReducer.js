import {
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
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
    default:
      return state;
  }
};
