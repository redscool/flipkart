import * as actionTypes from "../constants/productConstant";
import axios from "axios";
import config from "../../config.json";
const url = config.url;
export const getProducts = () => (dispatch) => {
  axios.get(`${url}/products`).then((response) => {
    console.log(response);
    const products = response.data.products;
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products });
  });
};

export const getProductDetails = (id) => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  axios.get(`${url}/product/${id}`).then((response) => {
    console.log(response.data);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: response.data.products[0],
    });
  });
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};
