import CategoryService from "../../services/CategoryService";
import {
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from "./categoryActionType";

const fetchCategoriesRequest = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
};

const fetchCategoriesSuccess = (data) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: data,
  };
};

const fetchCategoriesFailed = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILED,
    error: error,
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesRequest());
    try {
      const data = await CategoryService.getCategories();
      dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchCategoriesFailed(error));
    }
  };
};
