import React from "react";

const ResuableCard = ({ title, image, description }) => {
  return (
    <div>
      <div className="w-[70%] mx-auto flex items-center gap-12">
        <div className="w-[609.56px] h-[406.77px] ">
          <img src={image} alt="image" />
        </div>
        <div className="w-[609.56px] h-[356.77]">
          <h1 className="text-[29px] font-bold">{title}</h1>
          <p className="text-[16px]">{description}.</p>
          <div className="mt-5">
            <button className="bg-primary text-white p-2 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResuableCard;
