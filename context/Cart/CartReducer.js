import { ADD_TO_CART, DELETE_FROM_CART, OPEN_CART, CLOSE_CART } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_TO_CART:
      return { ...state, products: [...state.products, payload] };

    case DELETE_FROM_CART:
      return { ...state, selectedUser: payload };

    case OPEN_CART:
      return { ...state, cartIsOpened: payload };

    case CLOSE_CART:
      return { ...state, cartIsOpened: payload };

    default:
      return state;
  }
};
