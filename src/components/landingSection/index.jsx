import React from "react";

const person = require("../../images/magicien_crop.webp");
const trailer = require("../../videos/trailer_weabove3.mp4");
const LandingSection = () => {
  return (
    <>
      <div className="flex pt-[6%]">
        <div className="flex w-[43%] h-full justify-start">
          <img src={person} alt="/" />
        </div>
        <div className="flex justify-end overflow-hidden w-[52%]">
          <video
            autoPlay
            loop
            muted
            className=" w-auto min-w-full min-h-full max-w-none flex justify-center"
          >
            <source src={trailer} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
