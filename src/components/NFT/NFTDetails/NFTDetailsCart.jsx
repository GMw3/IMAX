import React from "react";

const line = require("../../../images/line.svg").default;
const presentation_video = require("../../../videos/presentation_ordos.mp4");

const NFTDetailsCart = ({ NFT }) => {
  return (
    <>
      <div className="flex md:px-40 justify-center bg-white flex-wrap">
        <div className="flex md:pl-30 p-10 py-40 flex-col w-[40%] gap-5">
          <div className="flex justify-start">
            <h1 className="text-3xl text-red-900">{NFT.title}</h1>
          </div>
          <div className="flex  justify-center font-bold">{NFT.details}</div>
          <div className="flex   justify-center text-gray-700">{NFT.about}</div>
          <div className="flex justify-end">
            <div className="flex justify-end border-gray-700 border-r-2 border-b-2 w-fit border-">
              <p>{NFT.speaker}</p>
            </div>
          </div>
        </div>

        <div className="py-10 w-[1%]">
          <img src={line} alt="/" className=" object-cover h-full" />
        </div>
        <div className="masking-image w-[30%] pt-[2%]">
          <div className="flex justify-center m-10 overflow-hidden w-[100%] masking-image">
            <video
              autoPlay
              loop
              muted
              className=" w-auto min-w-full min-h-full max-w-none flex justify-center"
            >
              <source src={NFT.video_url} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTDetailsCart;
