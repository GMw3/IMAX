import React from "react";

import NFTCartItem from "./NFTCartItem";

const NFTCarts = ({ NFTsData }) => {

  return (
    <>
       <div className="flex flex-wrap md:mx-[5%] lg:mx-[15%]">
        {NFTsData.map((nftItem,index) => {
          return <NFTCartItem key={nftItem.id} nft_video={nftItem.video_url} />;
        })}
      </div>
    </>
  );
};

export default NFTCarts;
