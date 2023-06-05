import React from "react";

const Loader = () => {
  return (
    <div className="bg-[#00000050] h-screen w-screen fixed top-0 left-0 z-10 flex items-center justify-center">
      <div className="flex space-x-2 animate-bounce">
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
