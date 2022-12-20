import React from "react";

import NFTCategory from "./NFTCategoryNavbar";
import NFTCollectionsData from "./NFTItemsAPI";
import NFTItemCart from "./NftCart";
import NFTDetails from "./NFTDetails";

const NFT = () => {
  return (
    <>
      <NFTCategory />
      <div className="flex flex-wrap md:mx-[5%] lg:mx-[15%]">
        {NFTCollectionsData.map((nftVideo) => {
          return <NFTItemCart nftItem={nftVideo.video_url} />;
        })}
      </div>
      <NFTDetails />
    </>
  );
};

export default NFT;
