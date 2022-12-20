import React from "react";

const headerImg = require("../../../images/NFTCategoryNavbarHeader.webp");
const NFTDetailsCategory = () => {
  return (
    <>
      <div className="flex mt-[10%] justify-evenly pt-40 pb-10 px-40">
        <div className="bg-nft-category-header bg-cover w-full h-[40px]"></div>
        <div className="flex items-center justify-center">
          <div className="p-1 px-3 text-3xl">ORDOS</div>
          <div className="p-1 px-3 text-3xl">FREO</div>
          <div className="p-1 px-3 text-3xl">ALTARI</div>
        </div>
        <div className="bg-nft-category-header bg-cover w-full h-[40px]"></div>
      </div>
    </>
  );
};

export default NFTDetailsCategory;
