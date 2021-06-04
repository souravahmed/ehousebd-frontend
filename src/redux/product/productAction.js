import {
  FETCH_LATEST_PRODUCTS_FAILED,
  FETCH_LATEST_PRODUCTS_REQUEST,
  FETCH_LATEST_PRODUCTS_SUCCESS,
} from "./productActionType";
import ProductService from "../../services/ProductService";

const fetchLatestProductsRequest = () => {
  return {
    type: FETCH_LATEST_PRODUCTS_REQUEST,
  };
};

const fetchLatestProductsSuccess = (data) => {
  return {
    type: FETCH_LATEST_PRODUCTS_SUCCESS,
    payload: data,
  };
};

const fetchLatestProductsFailed = (error) => {
  return {
    type: FETCH_LATEST_PRODUCTS_FAILED,
    error: error,
  };
};

export const getLatestProducts = () => {
  return async (dispatch) => {
    dispatch(fetchLatestProductsRequest());
    try {
      const data = await ProductService.getLatestProducts();
      dispatch(fetchLatestProductsSuccess(data));
    } catch (error) {
      dispatch(fetchLatestProductsFailed(error));
    }
  };
};
