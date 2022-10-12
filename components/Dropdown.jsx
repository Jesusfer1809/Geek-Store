import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { divisions } from "../utils/data";

import HoverDropdown from "./HoverDropdown";

function Dropdown({ isOpened }) {
  const [dropTheme, setDropTheme] = useState(undefined);
  const [stateDivisions, setStateDivisions] = useState([]);

  useEffect(() => {
    const newDivisions = divisions.filter(
      (obj) => obj.p_division.toLowerCase() === dropTheme
    );

    setStateDivisions(newDivisions);
  }, [dropTheme]);

  return (
    <div
      className={` bg-white shadow-md shadow-gray-200  ${
        isOpened ? "flex" : "hidden"
      } justify-around w-full absolute  -bottom-12 right-0 md:flex font-medium`}
    >
      <div
        onMouseEnter={() => setDropTheme("gaming")}
        onMouseLeave={() => setDropTheme(undefined)}
        className="flex items-center flex-grow justify-center cursor-pointer hover:text-red-900 transition-all "
      >
        <Link href="/gaming">
          <span className="  py-3 ">Gaming</span>
        </Link>
        {dropTheme === "gaming" && <HoverDropdown divisions={stateDivisions} />}
      </div>

      <div
        onMouseEnter={() => setDropTheme("collectibles")}
        onMouseLeave={() => setDropTheme(undefined)}
        className="flex items-center flex-grow justify-center cursor-pointer hover:text-red-900 transition-all "
      >
        <Link href="/collectibles">
          <span className="  py-3 ">Collectibles</span>
        </Link>
        {dropTheme === "collectibles" && (
          <HoverDropdown divisions={stateDivisions} />
        )}
      </div>

      <div
        onMouseEnter={() => setDropTheme("merchandise")}
        onMouseLeave={() => setDropTheme(undefined)}
        className="flex items-center flex-grow justify-center cursor-pointer hover:text-red-900 transition-all "
      >
        <Link href="/merchandise">
          <span className="  py-3 ">Merchandise</span>
        </Link>
        {dropTheme === "merchandise" && (
          <HoverDropdown divisions={stateDivisions} />
        )}
      </div>
    </div>
  );
}

export default Dropdown;
