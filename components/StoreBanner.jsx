import React from "react";

function StoreBanner({ title }) {
  return (
    <div>
      <div className="w-full hidden  bg-red-900 text-3xl md:flex items-center justify-center p-8 font-semibold text-white">
        {title}
      </div>
    </div>
  );
}

export default StoreBanner;
