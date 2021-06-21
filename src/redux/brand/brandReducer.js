import {
  FETCH_BRANDS_FAILED,
  FETCH_BRANDS_REQUEST,
  FETCH_BRANDS_SUCCESS,
} from "./brandActionType";

const initialState = {
  loading: false,
  brands: [],
  error: "",
};

export const BrandReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRANDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BRANDS_SUCCESS:
      return {
        ...state,
        brands: action.payload,
        loading: false,
      };
    case FETCH_BRANDS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
