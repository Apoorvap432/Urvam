import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-gray-100 p-4 rounded-lg">
      <div className="h-40 bg-gray-300 mb-4 rounded-md"></div>
      <div className="h-4 bg-gray-300 w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 w-1/2 mb-4"></div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-300 w-1/4"></div>
        <div className="h-4 bg-gray-300 w-1/4"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
