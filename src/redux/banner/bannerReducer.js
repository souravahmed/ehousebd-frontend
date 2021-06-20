import {
  FETCH_BANNER_FAILED,
  FETCH_BANNER_REQUEST,
  FETCH_BANNER_SUCCESS,
} from "./bannerActionType";

const initialState = {
  loading: false,
  banners: [],
  error: "",
};

export const BannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BANNER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BANNER_SUCCESS:
      return {
        ...state,
        loading: false,
        banners: action.payload,
      };
    case FETCH_BANNER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
