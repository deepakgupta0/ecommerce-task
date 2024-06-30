import React from "react";
/**
 * ProductListingSkeleton component for displaying a loading shimmer effect.
 *
 * @returns {JSX.Element} The wrapper for shimmer card component.
 */
const ProductListingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};
/**
 * ShimmerCard component for displaying a loading shimmer effect.
 *
 * @returns {JSX.Element} The shimmer card component.
 */
const ShimmerCard = () => {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center bg-white shadow hover:shadow-lg transition-shadow duration-300 animate-pulse">
      <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
      <div className="w-3/4 h-6 bg-gray-300 rounded mt-4"></div>
      <div className="w-full h-4 bg-gray-300 rounded mt-2"></div>
      <div className="w-2/4 h-4 bg-gray-300 rounded mt-2"></div>

      <div className="mt-4 flex flex-col items-center space-y-2 w-full">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-4 bg-gray-300 rounded"></div>
          <div className="w-12 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
        <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
        <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
      </div>

      <div className="w-1/3 h-6 bg-gray-300 rounded mt-4"></div>
      <div className="w-1/3 h-4 bg-gray-300 rounded mt-2"></div>
      <div className="w-1/2 h-8 bg-gray-300 rounded mt-4"></div>
    </div>
  );
};

export default ProductListingSkeleton;
