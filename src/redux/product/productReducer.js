import {
  FETCH_LATEST_PRODUCTS_FAILED,
  FETCH_LATEST_PRODUCTS_REQUEST,
  FETCH_LATEST_PRODUCTS_SUCCESS,
} from "./productActionType";

const initialState = {
  loading: false,
  latestProducts: [],
  error: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LATEST_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        latestProducts: action.payload,
      };
    case FETCH_LATEST_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
