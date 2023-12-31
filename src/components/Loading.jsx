import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center text-center flex-col">
      <div className="flex items-center justify-center space-x-2 py-4">
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-500"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-green-500"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange"></div>
      </div>
    </div>
  );
};

export default Loading;
