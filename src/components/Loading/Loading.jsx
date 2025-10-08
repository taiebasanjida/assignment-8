
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="animate-spin h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full"></div>
    </div>
  );
};

export default LoadingSpinner;
