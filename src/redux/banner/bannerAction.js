import BannerService from "../../services/BannerService";
import {
  FETCH_BANNER_FAILED,
  FETCH_BANNER_REQUEST,
  FETCH_BANNER_SUCCESS,
} from "./bannerActionType";

const fetchProductBannerRequest = () => {
  return {
    type: FETCH_BANNER_REQUEST,
  };
};

const fetchProductBannerSuccess = (data) => {
  return {
    type: FETCH_BANNER_SUCCESS,
    payload: data,
  };
};

const fetchProductBannerFailed = (error) => {
  return {
    type: FETCH_BANNER_FAILED,
    error: error,
  };
};

export const getProductBanners = () => {
  return async (dispatch) => {
    dispatch(fetchProductBannerRequest());
    try {
      const data = await BannerService.getBanners();
      dispatch(fetchProductBannerSuccess(data));
    } catch (error) {
      dispatch(fetchProductBannerFailed(error));
    }
  };
};
