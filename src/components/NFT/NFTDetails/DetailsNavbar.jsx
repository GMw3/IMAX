import React from "react";


const NFTDetailsCategory = ({ selectedNFT, setNFT }) => {
  return (
    <>
      <div className="flex mt-[10%] justify-evenly pt-40 pb-10 px-40">
        <div className="bg-nft-category-header bg-cover w-full h-[40px]"></div>
        <div className="flex items-center justify-center">
          <div
            className={`p-1 px-3 text-3xl ${
              selectedNFT === "ORDOS" &&
              "bg-category-selected bg-[length:100%_100%]"
            }`}
            onClick={() => {
              setNFT("ORDOS");
            }}
          >
            ORDOS
          </div>
          <div
            className={`p-1 px-3 text-3xl ${
              selectedNFT === "FREO" &&
              "bg-category-selected bg-[length:100%_100%]"
            }`}
            onClick={() => {
              setNFT("FREO");
            }}
          >
            FREO
          </div>
          <div
            className={`p-1 px-3 text-3xl ${
              selectedNFT === "ALTARI" &&
              "bg-category-selected bg-[length:100%_100%]"
            }`}
            onClick={() => {
              setNFT("ALTARI");
            }}
          >
            ALTARI
          </div>
        </div>
        <div className="bg-nft-category-header bg-cover w-full h-[40px]"></div>
      </div>
    </>
  );
};

export default NFTDetailsCategory;
