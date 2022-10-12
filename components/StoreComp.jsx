import React from "react";

import ProductCard from "./ProductCard";
import FiltersAndSort from "./FiltersAndSort";

function StoreComp({ prods }) {
  return (
    <div>
      <div>
        <FiltersAndSort />
      </div>
      <div className="text-gray-900 text-lg font-medium my-8">
        {prods.length} products
      </div>

      <div className="grid gap-x-4 gap-y-10 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full justify-items-center">
        {prods.map((p) => (
          <ProductCard product={p} />
        ))}
      </div>
    </div>
  );
}

export default StoreComp;
