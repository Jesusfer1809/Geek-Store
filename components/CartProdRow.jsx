import React from "react";
import { trimName } from "../utils/functions";
import Image from "next/image";

const STRING_MAX_LENGTH = 30;

function CartProdRow({ product }) {
  const { img_Src, name, cost, qty } = product;
  console.log(product);
  return (
    <div className="px-4 py-4 flex justify-between items-center space-x-5 border-b border-b-gray-200">
      <div className="flex space-x-5 items-center">
        <select className="border border-gray-400 h-fit px-2 py-1 rounded-md">
          {new Array(10).fill(1).map((_, i) => (
            <option>{i + 1}</option>
          ))}
        </select>
        <div className="w-14 h-10 relative">
          <Image width="100" height="100" layout="responsive" src={img_Src} />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-sm font-medium">
            {trimName(name, STRING_MAX_LENGTH)}
          </div>
          <div className="text-sm flex space-x-4">
            <span className="text-red-900">S/ {cost.toFixed(2)}</span>
            <span className="text-xs">Per {qty} un.</span>
          </div>
        </div>
      </div>

      <div>X</div>
    </div>
  );
}

export default CartProdRow;
