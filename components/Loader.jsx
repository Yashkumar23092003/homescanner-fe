import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex w-full h-3/4 justify-center items-center">
      <Oval 
        height={50}
        width={50}
        color="#3b82f6"
        secondaryColor="#ccc"
        strokeWidth={5}
        ariaLabel="oval-loading"
      />
    </div>
  );
};

export default Loader;
