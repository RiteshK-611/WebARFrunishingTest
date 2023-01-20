import * as actionTypes from "../constants/cartConstant";
import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL || "";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/api/product/${id}`);

    /*  let tempProduct={}
        if(q){
             tempProduct = { info: data, qty : q }
        }
        else {
             tempProduct = { info: data, qty : 1 }
        } */
    //THE QTY IS UPDATING BUT IT'S LIKE 1 1 2 3

    let tempProduct = {};
    tempProduct = { info: data, qty: 1 };

    // console.log("TempProduct: ", tempProduct.info.id);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: tempProduct });
  } catch (error) {
    console.log("Error while calling add to cart api");
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};

export const updateCartItemQty = (id, qty) => (dispatch) => {
  dispatch({ type: "UPDATE_ITEM_QTY", payload: id });
};
