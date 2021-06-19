import VariantService from "../../services/VariantService";
import {
  FETCH_PRODUCT_VARIANTS_REQUEST,
  FETCH_PRODUCT_VARIANTS_SUCCESS,
  FETCH_PRODUCT_VARIANTS_FAILED,
} from "./variantActionType";

const fetchProductVariantRequest = () => {
  return {
    type: FETCH_PRODUCT_VARIANTS_REQUEST,
  };
};

const fetchProductVariantSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_VARIANTS_SUCCESS,
    payload: data,
  };
};

const fetchProductVariantFailed = (error) => {
  return {
    type: FETCH_PRODUCT_VARIANTS_FAILED,
    error: error,
  };
};

export const getProductVariantsByCategorySlug = (categorySlug) => {
  return async (dispatch) => {
    dispatch(fetchProductVariantRequest());
    try {
      const data = await VariantService.getVariantsByCategorySlug(categorySlug);
      dispatch(fetchProductVariantSuccess(data));
    } catch (error) {
      dispatch(fetchProductVariantFailed(error));
    }
  };
};
