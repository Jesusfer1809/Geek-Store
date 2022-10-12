import { useContext, useRef } from "react";
import ProductsContext from "../context/Products/ProductsContext";

import ProductCard from "../components/ProductCard";

import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 480, itemsToShow: 2, itemsToScroll: 1 },
  { width: 750, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1050, itemsToShow: 4, itemsToScroll: 1 },
];

function Roulette({ categorie }) {
  const { products } = useContext(ProductsContext);
  const filteredProducts = products.filter((p) => p.s_division === categorie);

  const carouselRef = useRef(null);

  return (
    <Carousel
      ref={carouselRef}
      breakPoints={breakPoints}
      pagination={false}
      renderArrow={({ type, onClick }) => (
        <div
          onClick={onClick}
          className=" border border-gray-400 shadow-md shadow-gray-200 text-gray-900 h-10 self-center w-10 text-lg rounded-full flex items-center justify-center cursor-pointer"
        >
          {type === "PREV" ? "<-" : "->"}
        </div>
      )}
      onNextStart={(currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          // we hit the last item, go to first item
          carouselRef.current.goTo(0);
        }
      }}
      onPrevStart={(currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          // we hit the first item, go to last item
          carouselRef.current.goTo(filteredProducts.length);
        }
      }}
      enableAutoPlay={true}
      autoPlaySpeed={7000}
      enableSwipe={true}
    >
      {filteredProducts.map((p) => (
        <ProductCard product={p} key={p.name} />
      ))}
    </Carousel>
  );
}

export default Roulette;
