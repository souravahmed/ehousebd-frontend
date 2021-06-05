import {
  FETCH_LATEST_PRODUCTS_FAILED,
  FETCH_LATEST_PRODUCTS_REQUEST,
  FETCH_LATEST_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_BY_CATEGORY_FAILED,
  FETCH_PRODUCTS_BY_CATEGORY_REQUEST,
  FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
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

const fetchProductsByCategoryRequest = () => {
  return {
    type: FETCH_PRODUCTS_BY_CATEGORY_REQUEST,
  };
};
const fetchProductsByCategorySuccess = (data) => {
  return {
    type: FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
    payload: data,
  };
};
const fetchProductsByCategoryFailed = (error) => {
  return {
    type: FETCH_PRODUCTS_BY_CATEGORY_FAILED,
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

export const getProductsByCategory = (categorySlug) => {
  return async (dispatch) => {
    dispatch(fetchProductsByCategoryRequest());
    try {
      const data = await ProductService.getProductsByCategory(categorySlug);
      dispatch(fetchProductsByCategorySuccess(data));
    } catch (error) {
      dispatch(fetchProductsByCategoryFailed(error));
    }
  };
};
