import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from "./productActionType";
import ProductService from "../../services/ProductService";

const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

const fetchProductsSuccess = (data, category_slug) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    category_slug: category_slug,
    payload: data,
  };
};

const fetchProductsFailed = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILED,
    error: error,
  };
};

export const getProducts = ({
  sortBy = "",
  orderBy = "",
  filterBy = "",
  category_slug = "",
} = {}) => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const data = await ProductService.getProducts({
        sortBy: sortBy,
        orderBy: orderBy,
        filterBy: filterBy,
        category_slug: category_slug,
      });
      dispatch(fetchProductsSuccess(data, category_slug));
    } catch (error) {
      dispatch(fetchProductsFailed(error));
    }
  };
};
