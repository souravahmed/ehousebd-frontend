import {
  FETCH_BRANDS_FAILED,
  FETCH_BRANDS_REQUEST,
  FETCH_BRANDS_SUCCESS,
} from "./brandActionType";
import BrandService from "../../services/BrandService";

const fetchBrandsRequest = () => {
  return {
    type: FETCH_BRANDS_REQUEST,
  };
};

const fetchBrandsSuccess = (data) => {
  return {
    type: FETCH_BRANDS_SUCCESS,
    payload: data,
  };
};

const fetchBrandsFailed = (error) => {
  return {
    type: FETCH_BRANDS_FAILED,
    error: error,
  };
};

export const getBrands = () => {
  return async (dispatch) => {
    dispatch(fetchBrandsRequest());
    try {
      const data = await BrandService.getBrands();
      dispatch(fetchBrandsSuccess(data));
    } catch (error) {
      dispatch(fetchBrandsFailed(error));
    }
  };
};
