import Link from "next/link";
import React from "react";

import { slugify } from "../utils/functions";

function HoverDropdown({ divisions }) {
  const s_divisions = divisions.map((d) => d.s_division);
  const [p_division] = [...new Set(divisions.map((d) => d.p_division))];

  return (
    <div className="absolute hidden -bottom-[5.5rem]  left-1/2 -translate-x-1/2  w-4/5 bg-gray-100 shadow-md shadow-gray-400 border-t border-gray-200 text-black lg:flex justify-around rounded-md">
      {s_divisions.map((d) => (
        <Link href={`${slugify(p_division)}/${slugify(d)}`}>
          <span className="hover:text-red-900 transition-all  py-8 flex-grow flex justify-center cursor-pointer">
            {d}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default HoverDropdown;
