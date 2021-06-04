import ProductBannerService from "../../services/ProductBannerService";
import {
  FETCH_PRODUCT_BANNER_FAILED,
  FETCH_PRODUCT_BANNER_REQUEST,
  FETCH_PRODUCT_BANNER_SUCCESS,
} from "./productBannerActionType";

const fetchProductBannerRequest = () => {
  return {
    type: FETCH_PRODUCT_BANNER_REQUEST,
  };
};

const fetchProductBannerSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_BANNER_SUCCESS,
    payload: data,
  };
};

const fetchProductBannerFailed = (error) => {
  return {
    type: FETCH_PRODUCT_BANNER_FAILED,
    payload: error,
  };
};

export const getProductBanners = () => {
  return async (dispatch) => {
    dispatch(fetchProductBannerRequest());
    try {
      const data = await ProductBannerService.getBanners();
      dispatch(fetchProductBannerSuccess(data));
    } catch (error) {
      dispatch(fetchProductBannerFailed(error));
    }
  };
};
