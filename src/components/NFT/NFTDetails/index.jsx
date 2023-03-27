import React, {useState} from "react"

import get_NFTs_Filtered_Details from "../helping_Functions/NFTFIlteredFunction";
import NFTDetailsCart from "./NFTDetailsCart"
import NFTDetailsCategory from "./DetailsNavbar"
import NFTDetailsData from "../../../content/nft/NFTDetailsAPI";

const NFTDetails = () => {
  const [NFTDetails,setNFTDetails] = useState("ORDOS")

  let selected_NFT = get_NFTs_Filtered_Details(NFTDetails,NFTDetailsData);

  return (
    <>
      <NFTDetailsCategory selectedNFT={NFTDetails} setNFT={setNFTDetails} />
      <NFTDetailsCart key={selected_NFT.title} NFT={selected_NFT} />
    </>
  );
};

export default NFTDetails;
