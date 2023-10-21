import React from "react";

const Poster = () => {
  return (
    <div className="w-[100%] md:w-[95%]  h-[300px] flex justify-between items-center mx-auto bg-[#FFEECC] rounded-sm p-5">
      <div className="flex flex-col items-center justify-center gap-2 pl-16 flex-1 text-center">
        <div className="flex flex-col space-y-2">
          <p className="text-3xl md:text-4xl font-extrabold text-green-900">
            Grab Upto 50% Off On
          </p>
          <span className=" text-3xl md:text-4xl font-extrabold text-green-900">
            Selected Products
          </span>
        </div>
        <button className="w-[150px]  p-3  rounded-full text-white bg-green-950 font-bold">
          Buy Now
        </button>
      </div>
      <div className="flex items-center justify-center flex-1 hidden md:block">
        <img
          className="max-w-[420px] h-auto object-cover"
          src="./girl.png"
          alt="poster-img"
        />
      </div>
    </div>
  );
};

export default Poster;
