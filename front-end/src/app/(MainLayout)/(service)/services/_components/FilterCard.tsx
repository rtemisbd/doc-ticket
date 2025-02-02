import React from "react";

const FilterCard = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Filter Services</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="font-medium">Category</h3>
        <div className="flex flex-col mt-2 space-y-1">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-600" />
            <span>Dental</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-600" />
            <span>Surgery</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-600" />
            <span>Beauty</span>
          </label>
        </div>
      </div>


      {/* Price Range Filter */}
      <div className="mb-4">
        <h3 className="font-medium">Price Range</h3>
        <input type="range" className="w-full mt-2 accent-blue-600" />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>$50</span>
          <span>$500</span>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <h3 className="font-medium">Rating</h3>
        <div className="flex flex-col mt-2 space-y-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-2">
              <input type="radio" name="rating" className="accent-blue-600" />
              <span>{rating} ⭐ & up</span>
            </label>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FilterCard;
