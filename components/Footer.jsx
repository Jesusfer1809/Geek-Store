import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col text-indigo-100  xs:flex-row space-y-10 xs:space-y-0 xs:space-x-20 w-full justify-between py-4 px-3 sm:p-6 md:py-8 md:px-10">
        <div className="flex flex-col flex-shrink-0">
          <h3 className=" text-base mb-3 font-medium md:text-lg lg:text-xl">
            About us
          </h3>

          <a href="#" className="mb-1 text-sm md:text-base lg:text-lg">
            . Our store &rarr;
          </a>
          <a href="#" className="text-sm md:text-base lg:text-lg">
            . Contact us &rarr;
          </a>
        </div>
        <div className="flex flex-col">
          <span className="text-base  md:text-lg lg:text-xl font-medium mb-3">
            Subscribe to our newsletter
          </span>
          <p className="block mb-6 text-sm md:text-base">
            We're bringing new gaming stuff constantly, so stay tuned for
            updates in our stock.
          </p>

          <form action="#" className="w-full relative ">
            <input
              type="text"
              className="w-full lg:text-lg px-3 py-2 lg:py-3 rounded-full text-black border border-red-900"
              placeholder="Your email"
            />
            <button
              onClick={(e) => e.preventDefault()}
              className="absolute  h-full px-4 bg-red-900 border border-red-900 text-white rounded-full right-0 top-0"
            >
              Continue
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-800 pt-10 md:pt-0 px-3 sm:px-6 md:px-10 flex flex-col md:flex-row md:items-center md:space-x-32 lg:space-x-48">
        <div className="flex flex-col space-y-4 text-xs md:text-sm  text-white flex-shrink-0">
          <span>Geek Store, all rights reserved</span>
          <span>Made with 💜 in Lima, Peru</span>
        </div>

        <div className="flex space-x-6  mt-6 w-full justify-between">
          <div className="grayscale-[30%]">
            <Image src="/PayPal.svg" width={100} height={100} />
          </div>
          <div className="grayscale-[30%]">
            <Image src="/visa.svg" width={100} height={100} />
          </div>
          <div className="grayscale-[30%]">
            <Image src="/mastercard-2.svg" width={100} height={100} />
          </div>
          <div className="grayscale-[30%]">
            <Image src="/amex-card.svg" width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
