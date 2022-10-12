import React, { useReducer } from "react";
import ProductsReducer from "./ProductsReducer";
import ProductsContext from "./ProductsContext";

import axios from "axios";
import { ADD_TO_CART, DELETE_FROM_CART } from "../types";
import { products as dataProds } from "../../utils/data";

const UserState = (props) => {
  const initialState = {
    products: dataProds.map((p) => {
      return { ...p, isInCart: false };
    }),
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const nowIsAddedToCart = async (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  //   const getProfile = async (id) => {
  //     const res = await axios.get("https://reqres.in/api/users/" + id);
  //     dispatch({
  //       type: GET_PROFILE,
  //       payload: res.data.data,
  //     });
  //   };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        nowIsAddedToCart,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default UserState;
