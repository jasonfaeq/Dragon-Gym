import React from "react";

const Card = ({ image, name, duration, sets, calories }) => {
  return (
    <div className="relative max-w-[300px] h-[215px] bg-white m-[30px_10px] p-[20px_15px] flex flex-col shadow-lg transition-all duration-300 ease-in-out rounded-lg hover:h-[320px]">
      <div className="relative w-[260px] h-[260px] -top-[40%] left-[8px] shadow-md z-10">
        <img src={image} alt={name} className="max-w-full rounded-lg" />
      </div>
      <div className="relative top-[-140px] p-[10px_15px] text-center text-[#111] opacity-0 transition-all duration-300 ease-in-out hover:visible hover:opacity-100 hover:mt-[30px] delay-200">
        <h3 className="text-xl text-gray-900 font-semibold">{name}</h3>
        <p className="text-gray-700">
          {duration} min
          <br />
          {sets} sets
          <br />
          {calories} calories
        </p>
      </div>
    </div>
  );
};

export default Card;
