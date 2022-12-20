import React from "react";

const logo = require("../../images/logo2desktop.png");
const twitter = require("../../images/logo_twitter.webp");
const discord = require("../../images/logo_discord.webp");
const opensea = require("../../images/logo_opensea.svg").default;
const header_desc = require("../../images/header_des.gif");

const Navbar = () => {
  return (
    <>
      <div className="flex justify-evenly fixed w-full bg-background-img">
        <div className="w-[15%] px-3">
          <img src={logo} alt="We_Above" className="flex w-[140px]" />
        </div>

        <div className="flex w-full ">
          <div className="flex w-[50%] justify-end">
            <div className="p-3">LORE</div>
            <div className="p-3">NFT</div>
            <div className="p-3">ROADMAP</div>
          </div>
          <div>
            <img src={header_desc} alt="/" className="clip-path-mypolygon" />
          </div>
          <div className="flex w-[50%] justify-start">
            <div className="p-3">CREW</div>
            <div className="p-3">FACTIONS</div>
            <div className="p-3">FAQ</div>
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
