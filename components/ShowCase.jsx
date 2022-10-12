import { useContext, useRef } from "react";
import ProductsContext from "../context/Products/ProductsContext";

import Roulette from "../components/Roulette";

function ShowCase() {
  const { products } = useContext(ProductsContext);
  const categories = [...new Set(products.map((prod) => prod.s_division))];

  const renderRoulettes = () => {
    return categories.map((c) => (
      <div className=" mt-14 bg-gray-100 rounded-xl p-4 md:p-6" key={c}>
        <h3 className="mb-6 text-lg md:text-xl font-medium text-gray-900">
          {c}
        </h3>
        <Roulette categorie={c} />
      </div>
    ));
  };

  return (
    <div className="pt-16 pb-16">
      <div>
        <h2 className="text-xl md:text-2xl text-gray-900 font-medium">
          Our best products:
        </h2>
      </div>

      <div className="">{renderRoulettes()}</div>
    </div>
  );
}

export default ShowCase;
