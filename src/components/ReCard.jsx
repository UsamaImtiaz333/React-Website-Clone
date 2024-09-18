import React from "react";

const ReCard = ({ heading, peragraph, mg }) => {
  return (
    <div className="w-[70%] mx-auto flex items-center gap-12">
      <div className="w-[609.56px] h-[356.77]">
        <h1 className="text-[29px] font-bold">{heading}</h1>
        <p className="text-[16px]">{peragraph}</p>
        <div className="mt-5">
          <button className="bg-primary text-white p-2 rounded-md">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-[609.56px] h-[406.77px] ">
        <img src={mg} alt="" />
      </div>
    </div>
  );
};

export default ReCard;
