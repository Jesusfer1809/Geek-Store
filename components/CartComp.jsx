import React, { useContext } from "react";
import CartProdRow from "./CartProdRow";
import CartContext from "../context/Cart/CartContext";

import { BasketOutline } from "react-ionicons";

function CartComp() {
  const { closeCart, cartIsOpened, cartProducts } = useContext(CartContext);
  return (
    <div
      className={`w-screen h-screen text-gray-900 bg-gray-900 bg-opacity-40 z-[80] fixed top-0 right-0 ${
        cartIsOpened ? "flex" : "hidden"
      } justify-end `}
      onClick={closeCart}
    >
      <div
        className="w-full h-screen  bg-white "
        onClick={(e) => e.stopPropagation()}
      >
        {cartProducts.length ? (
          <div className="flex flex-col justify-between h-full">
            <div className="h-4/5 ">
              <div className="flex justify-between px-4 py-4 text-lg font-medium border-b-2 border-gray-300 h-1/6">
                <span>Cart</span>
                <div
                  className="w-8 h-8 flex justify-center items-center  bg-gray-200 rounded-full"
                  onClick={() => closeCart()}
                >
                  X
                </div>
              </div>
              <div className="overflow-scroll h-5/6">
                {cartProducts.map((product) => (
                  <CartProdRow product={product} />
                ))}
              </div>
            </div>

            <div className="px-4 py-4 border-t border-t-gray-200 flex flex-col space-y-4 h-1/5">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span>S/ 47.80</span>
              </div>
              <div>
                <button className="bg-red-900 py-2 w-full text-white rounded-md">
                  Finish Order
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col  h-full">
            <div className="flex justify-between px-4 py-4 text-lg font-medium border-b-2 border-gray-300">
              <span>Cart</span>
              <div
                className="w-8 h-8 flex justify-center items-center  bg-gray-200 rounded-full"
                onClick={() => closeCart()}
              >
                X
              </div>
            </div>

            <div className="px-8  flex justify-center items-center  flex-grow">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
                  <BasketOutline width="70px" height="70px" color="#7F1D1D" />
                </div>
                <div className="text-2xl text-red-900">Your cart is empty</div>
                <p className="block text-gray-900">
                  Start filling it with some products. There's a lot to choose
                  from!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartComp;
