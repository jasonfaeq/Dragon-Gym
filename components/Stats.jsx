import React from "react";

const Stats = () => {
  return (
    <div className="w-full h-auto flex items-center lg:justify-between md:justify-between sm:justify-center justify-center lg:gap-4 md:gap-4 sm:gap-3 gap-3 lg:px-24 md:px-16 sm:px-6 px-6 mt-6 py-12 flex-wrap">
      <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
        <h5 className="text-4xl text-accent font-semibold mb-2 uppercase">
          1200+
        </h5>
        <p className="text-lg text-gray-500 font-medium text-center">Members</p>
      </div>
      <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
        <h5 className="text-4xl text-accent font-semibold mb-2 uppercase">
          80+
        </h5>
        <p className="text-lg text-gray-500 font-medium text-center">
          Expert Trainers
        </p>
      </div>
      <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
        <h5 className="text-4xl text-accent font-semibold mb-2 uppercase">
          15+
        </h5>
        <p className="text-lg text-gray-500 font-medium text-center">
          Years in Business
        </p>
      </div>
      <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
        <h5 className="text-4xl text-accent font-semibold mb-2 uppercase">
          17+
        </h5>
        <p className="text-lg text-gray-500 font-medium text-center">
          Locations
        </p>
      </div>
    </div>
  );
};

export default Stats;
