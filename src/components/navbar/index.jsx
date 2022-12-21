import React from "react";

const discord = require("../../images/logo_discord.webp");
const header_desc = require("../../images/header_des.gif");
const logo = require("../../images/logo2desktop.png");
const opensea = require("../../images/logo_opensea.svg").default;
const twitter = require("../../images/logo_twitter.webp");

const Navbar = () => {
  return (
    <>
      <div className="flex justify-evenly fixed w-full bg-background-img z-50 border-b-4 border-red-400">
        <div className="w-[14%] px-3">
          <img src={logo} alt="We_Above" className="flex w-[140px]" />
        </div>

        <div className="flex w-full">
          <div className="flex w-[50%] justify-end items-center mr-20 font-heebo text-[#a5b4bd] text-lg">
            <div className="px-10 ">LORE</div>
            <div className="px-10 ">NFT</div>
            <div className="px-10 ">ROADMAP</div>
          </div>
          <div className="z-10 left-[1200px] absolute">
            <img src={header_desc} alt="/" className="clip-path-mypolygon w-[60%] mt-7" />
          </div>
          <div className="flex w-[50%] justify-start items-center font-heebo text-[#a5b4bd] text-lg">
            <div className="px-10">CREW</div>
            <div className="px-10">FACTIONS</div>
            <div className="px-10">FAQ</div>
          </div>
        </div>

        <div className="flex justify-evenly w-[8%]">
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
