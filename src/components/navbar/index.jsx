import React from "react";
import { useNavigate } from "react-router-dom";

const discord = require("../../images/navbar/logo_discord.webp");
const header_desc = require("../../images/navbar/header_des.gif");
const logo = require("../../images/navbar/logo2desktop.png");
const opensea = require("../../images/navbar/logo_opensea.svg").default;
const twitter = require("../../images/navbar/logo_twitter.webp");

const Navbar = ({
  logout,
  disconnect,
  setUserMintedAmount,
  setMaxMintAmount,
  setPrice,
  setImages,
  connection,
  readContract,
  getTokens,
  wallet,
  price,
  images,
  userMintedAmount,
  maxMintAmount,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between  fixed w-full bg-background-img z-50 border-b-4 border-red-400">
        <div onClick={() => navigate("/")} className="w-[140px] m-4">
          <img src={logo} alt="We_Above" />
        </div>

        <div className="flex  justify-center">
          <div className="flex justify-end items-center font-heebo text-[#a5b4bd] text-lg">
            <div className="px-10 hover:text-black">LORE</div>
            <div className="px-10 hover:text-black">NFT</div>
            <div className="px-10 hover:text-black">ROADMAP</div>
          </div>
          <div className="flex justify-center relative top-[67%] mt-[-3%]">
            <img src={header_desc} alt="/" className="clip-path-mypolygon" />
          </div>
          <div className="flex justify-start items-center  font-heebo text-[#a5b4bd] text-lg">
            <div className="px-10 hover:text-black">CREW</div>
            <div className="px-10 hover:text-black">FACTIONS</div>
            <div className="px-10 hover:text-black">FAQ</div>
          </div>
        </div>
        <button
          onClick={async () => {
            logout
              ? (async function () {
                  await disconnect();
                  await setUserMintedAmount(0);
                  await setMaxMintAmount("-");
                  await setPrice("-");
                  await setImages([]);
                  navigate("/");
                })()
              : (async function () {
                  await connection();
                  await readContract();
                  await getTokens();
                  navigate("/mint");
                })();
          }}
          className={` hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 hover:text-xl hover:text-black  text-lg font-heebo text-[#a5b4bd] font-bold  rounded-xl transition duration-200 ${
            logout ? "hover:before:content-['Disconnect:']" : ""
          }`}
        >
          {wallet}
        </button>
      </div>
    </>
  );
};

export default Navbar;
