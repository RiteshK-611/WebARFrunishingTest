import * as actionTypes from "../constants/productConstants";
import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL || "";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/api/products`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/api/product/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error.response,
    });
  }
};
