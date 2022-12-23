import React from "react";

const NFTCartItem = ({ nft_video }) => {
  return (
    <>
      <div className="lg:p-14 md:p-4 p-6 md:w-1/3 sm:w-full">
        <div className="w-full nft-masking-image bg-black">
          <video autoPlay loop muted className="p-6">
            <source src={nft_video} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default NFTCartItem;
