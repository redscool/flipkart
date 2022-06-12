import * as actionTypes from "../constants/cartConstants";
import axios from "axios";
import config from "../../config.json";
const url = config.url;
export const addToCart = (id, quantity) => (dispatch, getState) => {
  axios.get(`${url}/product/${id}`).then((response) => {
    const data = response.data.products;
    console.log(data);
    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  });
};

export const removeFromCart = (id) => (dispatch, getState) => {
  console.log(id);
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
