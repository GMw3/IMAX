import React, { useState} from "react"

import NFTCategory from "./NFTCategoryNavbar"
import NFTCollectionsData from "./NFTItemsAPI"
import NFTDetails from "./NFTDetails"
import get_NFTs_Filtered from "./helping_Functions/NFTSelectingFuction"
import NFTCarts from "./NFTCartModule"

const NFT = () => {
  const [NFTcategory,setNFTCategory] = useState("ORDOS")

  let filtered_NFTs = get_NFTs_Filtered(NFTcategory, NFTCollectionsData);
  return (
    <>
      <NFTCategory nftSelectedCategory={NFTcategory} setCategory={setNFTCategory} />
      <NFTCarts NFTsData={filtered_NFTs} />
      <NFTDetails />
    </>
  );
};

export default NFT;
