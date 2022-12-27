import React from "react";
import VideoPlayer from '../../VideoPlayer'

const line = require("../../../images/NFT/line.svg").default;

const NFTDetailsCart = ({ NFT }) => {
  return (
    <>
      <div className="flex md:px-40 justify-center bg-white flex-wrap flex-col md:flex-row">
        <div className="flex md:pl-30 p-10 py-40 px-36 flex-col w-full md:w-[40%] gap-5 flex-wrap">
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

        <div className="flex py-10 w-[1%] invisible md:visible">
          <img src={line} alt="/" className=" h-full" />
        </div>
        <div className="masking-image w-full md:w-[40%] pt-[2%] flex">
          <div className="flex justify-center m-10 overflow-hidden w-[100%] masking-image">
            {/* <video
              autoPlay
              loop
              muted
              className=" w-auto min-w-full min-h-full max-w-none flex justify-center"
            >
              <source src={NFT.video_url} type="video/mp4" />
            </video> */}
            <VideoPlayer url={NFT.video_url} id={3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTDetailsCart;
