import React, { useReducer } from "react";
import CartReducer from "./CartReducer";
import CartContext from "./CartContext";

import axios from "axios";
import { ADD_TO_CART, DELETE_FROM_CART, OPEN_CART, CLOSE_CART } from "../types";
import { products as dataProds } from "../../utils/data";

const UserState = (props) => {
  const initialState = {
    products: [],
    cartIsOpened: false,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = async (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { ...product, qty: 1 },
    });
  };

  const openCart = () => {
    dispatch({
      type: OPEN_CART,
      payload: true,
    });
  };

  const closeCart = () => {
    dispatch({
      type: CLOSE_CART,
      payload: false,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts: state.products,
        addToCart,
        cartIsOpened: state.cartIsOpened,
        openCart,
        closeCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default UserState;
