import React from "react";

const discord = require("../../images/navbar/logo_discord.webp");
const header_desc = require("../../images/navbar/header_des.gif");
const logo = require("../../images/navbar/logo2desktop.png");
const opensea = require("../../images/navbar/logo_opensea.svg").default;
const twitter = require("../../images/navbar/logo_twitter.webp");

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between  fixed w-full bg-background-img z-50 border-b-4 border-red-400">
        <div className="w-[140px] m-4">
          <img src={logo} alt="We_Above" />
        </div>

        <div className="flex  justify-center">
          <div className="flex justify-end items-center font-heebo text-[#a5b4bd] text-lg">
            <div className="px-10 ">LORE</div>
            <div className="px-10 ">NFT</div>
            <div className="px-10 ">ROADMAP</div>
          </div>
          <div className="flex justify-center relative top-[67%] mt-[-3%]">
            <img src={header_desc} alt="/" className="clip-path-mypolygon" />
          </div>
          <div className="flex justify-start items-center font-heebo text-[#a5b4bd] text-lg">
            <div className="px-10">CREW</div>
            <div className="px-10">FACTIONS</div>
            <div className="px-10">FAQ</div>
          </div>
        </div>

        <div className="flex justify-evenly">
          <div className="w-[70px] p-3">
            <img src={twitter} alt="/" />
          </div>
          <div className="w-[70px] p-3">
            <img src={discord} alt="/" />
          </div>
          <div className="w-[70px] p-3">
            <img src={opensea} alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
