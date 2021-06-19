import {
  FETCH_PRODUCT_VARIANTS_FAILED,
  FETCH_PRODUCT_VARIANTS_REQUEST,
  FETCH_PRODUCT_VARIANTS_SUCCESS,
} from "./variantActionType";

const initialState = {
  loading: false,
  variants_by_category: [],
  error: "",
};

export const variantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_VARIANTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_VARIANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        variants_by_category: action.payload,
      };
    case FETCH_PRODUCT_VARIANTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
