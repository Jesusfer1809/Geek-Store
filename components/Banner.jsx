import Image from "next/image";
import React, { useRef } from "react";

import Carousel from "react-elastic-carousel";

const breakPoints = [{ width: 1, itemsToShow: 1, itemsToScroll: 1 }];

function Banner() {
  const carouselRef = useRef(null);
  const change = () => {
    const timer = setTimeout(() => {
      carouselRef && carouselRef.current.goTo(0);
    }, 5000);
    return () => clearTimeout(timer);
  };

  return (
    <Carousel
      ref={carouselRef}
      breakPoints={breakPoints}
      pagination={true}
      renderArrow={({ type, onClick }) => (
        <div
          onClick={onClick}
          className=" border border-red-400 shadow-md shadow-red-200 text-red-900 h-10 self-center w-10 text-lg rounded-full hidden items-center justify-center cursor-pointer"
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
          carouselRef.current.goTo(prods.length);
        }
      }}
      onChange={(currentItemObject, currentPageIndex) => {
        if (currentPageIndex === 3) {
          change();
          currentPageIndex = 1;
        }
      }}
      enableSwipe={false}
      enableAutoPlay={true}
      autoPlaySpeed={5000}
    >
      <div className="w-full relative h-36 xs:h-56 md:h-64 lg:h-80">
        <Image src={"https://i.imgur.com/vnWahFe.png"} layout="fill" priority />
      </div>

      <div className="w-full relative h-36 xs:h-56 md:h-64 lg:h-80">
        <Image src={"https://i.imgur.com/MMNKDXK.png"} layout="fill" />
      </div>

      <div className="w-full relative h-36 xs:h-56 md:h-64 lg:h-80">
        <Image src={"https://i.imgur.com/F5XJaeC.png"} layout="fill" />
      </div>

      <div className="w-full relative h-36 xs:h-56 md:h-64 lg:h-80">
        <Image src={"https://i.imgur.com/R0TuHN7.jpg"} layout="fill" />
      </div>
    </Carousel>
  );
}

export default Banner;
