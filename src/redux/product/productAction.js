import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_FEATURED_PRODUCTS_REQUEST,
  FETCH_FEATURED_PRODUCTS_SUCCESS,
  FETCH_FEATURED_PRODUCTS_FAILED,
  FETCH_BRAND_PRODUCTS_REQUEST,
  FETCH_BRAND_PRODUCTS_SUCCESS,
  FETCH_BRAND_PRODUCTS_FAILED,
  FETCH_PRODUCT_FILTERS_REQUEST,
  FETCH_PRODUCT_FILTERS_SUCCESS,
  FETCH_PRODUCT_FILTERS_FAILED,
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
    category_slug: category_slug !== "" ? category_slug : "products",
    payload: data,
  };
};

const fetchProductsFailed = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILED,
    error: error,
  };
};

// featured products

const fetchFeaturedProductsRequest = () => {
  return {
    type: FETCH_FEATURED_PRODUCTS_REQUEST,
  };
};

const fetchFeaturedProductsSuccess = (data) => {
  return {
    type: FETCH_FEATURED_PRODUCTS_SUCCESS,
    payload: data,
  };
};

const fetchFeaturedProductsFailed = (error) => {
  return {
    type: FETCH_FEATURED_PRODUCTS_FAILED,
    error: error,
  };
};

// brand products

const fetchBrandProductsRequest = () => {
  return {
    type: FETCH_BRAND_PRODUCTS_REQUEST,
  };
};

const fetchBrandProductsSuccess = (data) => {
  return {
    type: FETCH_BRAND_PRODUCTS_SUCCESS,
    payload: data,
  };
};
const fetchBrandProductsFailed = (error) => {
  return {
    type: FETCH_BRAND_PRODUCTS_FAILED,
    error: error,
  };
};

// product filters

const fetchProductFiltersRequest = () => {
  return {
    type: FETCH_PRODUCT_FILTERS_REQUEST,
  };
};

const fetchProductFiltersSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_FILTERS_SUCCESS,
    payload: data,
  };
};

const fetchProductFiltersFailed = (error) => {
  return {
    type: FETCH_PRODUCT_FILTERS_FAILED,
    error: error,
  };
};

export const getProductFilters = () => {
  return async (dispatch) => {
    dispatch(fetchProductFiltersRequest());
    try {
      const data = await ProductService.getProductFilters();
      dispatch(fetchProductFiltersSuccess(data));
    } catch (error) {
      dispatch(fetchProductFiltersFailed(error));
    }
  };
};

export const getBrandProducts = (brandSlug) => {
  return async (dispatch) => {
    dispatch(fetchBrandProductsRequest());
    try {
      const data = await ProductService.getBrandProducts(brandSlug);
      dispatch(fetchBrandProductsSuccess(data));
    } catch (error) {
      dispatch(fetchBrandProductsFailed(error));
    }
  };
};

export const getFeaturedProducts = () => {
  return async (dispatch) => {
    dispatch(fetchFeaturedProductsRequest());
    try {
      const data = await ProductService.getFeaturedProducts();
      dispatch(fetchFeaturedProductsSuccess(data));
    } catch (error) {
      dispatch(fetchFeaturedProductsFailed(error));
    }
  };
};

export const getProducts = ({
  sortBy = "",
  orderBy = "",
  category_slug = "",
} = {}) => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const data = await ProductService.getProducts({
        sortBy: sortBy,
        orderBy: orderBy,
        category_slug: category_slug,
      });
      dispatch(fetchProductsSuccess(data, category_slug));
    } catch (error) {
      dispatch(fetchProductsFailed(error));
    }
  };
};
