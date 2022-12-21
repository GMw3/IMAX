import React from "react";

const NFTCategory = ({ nftSelectedCategory, setCategory }) => {
  return (
    <>
      <div className="flex mt-[10%] justify-evenly p-40">
        <div className="bg-nft-category-header bg-cover w-full h-[40px]"></div>
        <div className="flex">
          <div
            className={`p-5 text-3xl ${nftSelectedCategory === "ORDOS" && "bg-category-selected bg-[length:100%_100%]" }`}
            onClick={() => {setCategory("ORDOS")}}>
            ORDOS
          </div>
          <div
            className={`p-5 text-3xl ${nftSelectedCategory === "FREO" && "bg-category-selected bg-[length:100%_100%]" }`}
            onClick={() => {setCategory("FREO")}}>
            FREO
          </div>
          <div
            className={`p-5 text-3xl ${nftSelectedCategory === "ALTARI" && "bg-category-selected bg-[length:100%_100%]" }`}
            onClick={() => {setCategory("ALTARI")}}>
            ALTARI
          </div>
        </div>
        <div className="bg-nft-category-header bg-cover w-full h-[40px]"></div>
      </div>
    </>
  );
};

export default NFTCategory;
