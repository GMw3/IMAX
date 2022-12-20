import React from "react";

const headerImg = require("../../images/NFTCategoryNavbarHeader.webp");
const NFTCategory = () => {
  return (
    <>
      <div className="flex mt-[10%] justify-evenly p-40">
        <div className="bg-nft-category-header bg-cover w-full h-[40px]">
        </div>
        <div className="flex">
            <div className="p-5 text-3xl">ORDOS</div>
            <div className="p-5 text-3xl">FREO</div>
            <div className="p-5 text-3xl">ALTARI</div>

        </div>
        <div className="bg-nft-category-header bg-cover w-full h-[40px]">
        </div>
      </div>
    </>
  );
};

export default NFTCategory;
