import { useContext, useEffect } from "react";
import ProductsContext from "../context/Products/ProductsContext";
import CartContext from "../context/Cart/CartContext";
import Image from "next/image";

import { HeartCircleOutline } from "react-ionicons";
import { trimName } from "../utils/functions";
const STRING_MAX_LENGTH = 40;

function ProductCard({ product }) {
  const { nowIsAddedToCart } = useContext(ProductsContext);
  const { cartProducts, addToCart } = useContext(CartContext);

  return (
    <div className="shadow-md bg-white shadow-gray-400 border border-gray-200 flex-shrink-0 p-2 md:p-3  min-w-48 w-52 md:w-56 flex flex-col text-sm rounded-md ">
      <div className=" flex justify-between mb-1 md:mb-3 text-xs md:text-sm text-gray-500">
        <span className="">{product.p_division}</span>
        <span className="block min-w-fit">No fav</span>
      </div>

      <div className="w-full h-auto relative mb-2 md:mb-4">
        <Image
          src={product.img_Src}
          width={100}
          height={100}
          layout="responsive"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-red-900 text-xs md:text-sm mb-1 md:mb-2">
          {product.s_division}
        </span>
        <span className=" font-medium md:text-base">
          {trimName(product.name, STRING_MAX_LENGTH)}
        </span>
        <p className="block mt-3 text-lg">
          <span className="text-sm">S/.</span>{" "}
          <span>{product.cost.toFixed(2)}</span>
        </p>
      </div>

      <div className="mt-4">
        {!product.isInCart ? (
          <button
            className="bg-red-900 text-white w-full py-2 rounded-md"
            onClick={() => {
              addToCart(product);
              nowIsAddedToCart(product);
            }}
          >
            Add to cart
          </button>
        ) : (
          <button className="bg-gray-900 text-white w-full py-2 rounded-md">
            Added to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
