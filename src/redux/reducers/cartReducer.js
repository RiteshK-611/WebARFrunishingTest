import * as actionTypes from "../constants/cartConstant";
// import { useState } from "react";

export const cartReducer = (state = { cartItems: [] }, action) => {
  const cartItemsFromLocalStorage = JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  );

  state.cartItems = cartItemsFromLocalStorage;

  // console.log("Cart items from local storage: ", cartItemsFromLocalStorage)
  // console.log("State.cartItems: ", state.cartItems)

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const exist = state.cartItems.find(
        (product) => product.id === item.info.id
      );

      if (exist) {
        return;
        // const index = state.cartItems.findIndex(
        //   (product) => product.info.id === item.info.id
        // );
        // return (state.cartItems[index].qty += 1);
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case actionTypes.REMOVE_FROM_CART:
      // console.log("In reducer on remove from cart");
      const id = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.filter((product) => product.id !== id),
      };

    case "UPDATE_ITEM_QTY":
      return;

    default:
      return state;
  }
};
