import {
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_FEATURED_CATEGORIES_FAILED,
  FETCH_FEATURED_CATEGORIES_REQUEST,
  FETCH_FEATURED_CATEGORIES_SUCCESS,
} from "./categoryActionType";

const initialState = {
  loading: false,
  categories: [],
  error: "",
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    // featured categoires

    case FETCH_FEATURED_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FEATURED_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        featuredCategories: action.payload,
      };
    case FETCH_FEATURED_CATEGORIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
