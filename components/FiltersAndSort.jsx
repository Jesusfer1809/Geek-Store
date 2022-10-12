import React from "react";

import { OptionsOutline } from "react-ionicons";

function FiltersAndSort() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:mt-8 space-y-4 md:space-y-0 md:space-x-8 pb-8 border-b border-gray-200">
        <div className="w-fit overflow-hidden border-2 border-gray-600 font-medium pl-4  rounded-lg">
          <form
            action="#"
            id="sortBy"
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-between w-full space-x-4"
          >
            <label htmlFor="sortBy">Order by</label>
            <select
              name="sortBy"
              id="sortBy"
              form="sortBy"
              className="px-4 py-2 focus:outline-none"
            >
              <option value="Relevance">Relevancy</option>
              <option value="HighPrice">Higher Prices</option>
              <option value="LowPrice">Lower Prices</option>
              <option value="NameAsc">Name, ascendant</option>
              <option value="NameDes">Name, descendant</option>
            </select>
          </form>
        </div>

        <div className="w-fit flex space-x-2 border-2 border-gray-600 font-medium px-4 py-2 rounded-lg">
          <span>Filter</span>
          <OptionsOutline />
        </div>
      </div>
    </>
  );
}

export default FiltersAndSort;
