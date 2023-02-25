import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full col-span-6 md:col-span-3 lg:col-span-1">
      <div className="flex flex-col items-start justify-start w-full h-full overflow-hidden border rounded-lg shadow-lg">
        <div className="w-full h-56 mb-2 bg-gray-400 animate-pulse" />
        <h3 className="w-full h-4 mb-2 bg-gray-500 animate-pulse rounded-xl " />
        <p className="w-3/4 h-3 mb-1 bg-gray-500 animate-pulse rounded-xl " />
        <p className="w-2/4 h-3 mb-1 bg-gray-500 animate-pulse rounded-xl " />
        <p className="w-1/4 h-3 mb-1 bg-gray-500 animate-pulse rounded-xl " />
      </div>
    </div>
  );
};

export default Loading;
