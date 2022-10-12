import React, { useState, useContext } from "react";
import Link from "next/link";

import CartContext from "../context/Cart/CartContext";

import Dropdown from "../components/Dropdown";
import CartComp from "../components/CartComp";

import {
  CallOutline,
  PersonCircleOutline,
  ListOutline,
  BasketOutline,
} from "react-ionicons";

function NavBar() {
  const [dropIsOpen, setDropIsOpen] = useState(false);

  const { openCart } = useContext(CartContext);

  const toggleOpen = () => {
    setDropIsOpen(!dropIsOpen);
  };

  return (
    <>
      <div className="z-50 bg-white border-t-4  fixed  w-full font-medium   border-red-700">
        <div
          className={`flex justify-between px-3 py-4 sm:px-6 md:px-10 w-full border-b border-b-gray-200 ${
            dropIsOpen ? "" : "bg-white shadow-sm shadow-gray-100"
          }`}
        >
          <div className="flex items-center space-x-4 md:space-x-0">
            <div className="md:hidden">
              <ListOutline onClick={toggleOpen} />
            </div>
            <Link href={"/"}>
              <h1 className="font-medium text-lg md:text-xl lg:text-2xl cursor-pointer">
                Geek Store 👾
              </h1>
            </Link>
          </div>

          <nav className="flex space-x-4 md:space-x-6 lg:space-x-8 items-center">
            <div className="flex space-x-2">
              <CallOutline />
              <span className="hidden sm:block">Contact us</span>
            </div>

            <div className="flex space-x-2 cursor-pointer">
              <PersonCircleOutline />
              <Link href={"/login"}>
                <span className="hidden sm:block">Enter / Register</span>
              </Link>
            </div>

            <div className="border-l border-l-red-400 pl-6 cursor-pointer">
              <BasketOutline width="30px" height="30px" onClick={openCart} />
            </div>
          </nav>
        </div>
        <Dropdown isOpened={dropIsOpen} />
      </div>
      <CartComp />
    </>
  );
}

export default NavBar;
