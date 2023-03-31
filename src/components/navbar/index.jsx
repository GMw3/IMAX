import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";

const discord = require("../../images/navbar/logo_discord.webp");
const header_desc = require("../../images/navbar/header_des.gif");
const logo = require("../../images/navbar/logo2desktop.png");
const opensea = require("../../images/navbar/logo_opensea.svg").default;
const twitter = require("../../images/navbar/logo_twitter.webp");
const rightArrow = require("../../images/navbar/rightarrow.svg").default;
const menu = require("../../images/navbar/menu.svg").default;



const Navbar = ({
  connection,
  disconnect,
  getTokens,
  logout,
  readContract,
  wallet,
}) => {
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
        <div className="flex justify-between fixed w-full bg-background-img z-50 border-b-4 border-red-400">
          <div onClick={() => navigate("/")} className="w-[140px] m-4 flex items-center">
            <img src={logo} alt="We_Above" />
          </div>
          
          <div className="hidden xl:block">
            <div className="flex justify-center">
              <div className="flex justify-end items-center font-heebo text-[#a5b4bd] text-lg">
                <div className="px-10 hover:text-black">
                  <a href={window.location.pathname === "/mint" ? "/#lore " : "#lore"}>
                    LORE
                  </a>
                </div>
                <div className="px-10 hover:text-black">
                  <a href={window.location.pathname === "/mint" ? "/#nft" : "#nft"}>
                    NFT
                  </a>
                </div>
                <div className="px-10 hover:text-black">
                  <a
                    href={window.location.pathname === "/mint" ? "/#roadmap" : "#roadmap"}
                  >
                    ROADMAP
                  </a>
                </div>
              </div>
              <div className="flex justify-center relative top-[67%] mt-[-3]">
                <img src={header_desc} alt="/" className="clip-path-mypolygon" />
              </div>
              <div className="flex justify-start items-center font-heebo text-[#a5b4bd] text-lg">
                <div className="px-10 hover:text-black">
                  <a href={window.location.pathname === "/mint" ? "/#crew" : "#crew"}>
                    CREW
                  </a>
                </div>
                <div className="px-10 hover:text-black">
                  <a href={window.location.pathname === "/mint" ? "/#faq" : "#faq"}>
                    FAQ
                  </a>
                </div>
                <div className="px-10 hover:text-black">
                  <a href="/mint">Mint</a>
                </div>
                
              </div>
            </div>
          </div>
          <div className="px-10 hover:text-black hidden xl:flex items-center">
                  <button
                    onClick={async () => {
                      logout
                      ? (async function () {
                        await disconnect();
                        navigate("/");
                      })()
                      : (async function () {
                        await connection();
                        await readContract();
                        await getTokens();
                        navigate("/mint");
                      })();
                    }}
                    className={`lg:inline-block hover:text-xl hover:text-black  text-lg font-heebo text-[#a5b4bd] font-bold  rounded-xl transition duration-200 ${
                      logout ? "hover:before:content-['Disconnect:']" : ""
                    }`}
                    >
                    {wallet}
                  </button>
                </div>
          
          <div onClick={handleNav} className="block xl:hidden m-5">
              <CgMenu size={25}/>
          </div>

        </div>
      

      {nav ? (
        <div className="text-black flex w-full h-full xl:hidden items-center z-50 justify-between fixed ">
          <div className="fixed left-0 top-0 w-full z-60 backdrop-blur-[80px] ease-in-out duration-500">
            <div className="flex justify-between items-center m-5">
              <span onClick={() => navigate("/")} className="w-[30%]">
                <img src={logo} alt="/" />
              </span>
              <div onClick={handleNav} className="order-last m-5">
                <img src={rightArrow} alt="/" />
              </div>
            </div>
            <ul className="p-6 py-4 text-3xl font-extrabold font-poppins">
              <li className="my-10 ">
                <a href={window.location.pathname === "/mint" ? "/#lore" : "#lore"}>
                  LORE
                </a>
              </li>
              <li className="my-10">
                <a href="/mint">Mint</a>
              </li>
              <li className="my-10">
                <a href={window.location.pathname === "/mint" ? "/#nft" : "#nft"}>
                  NFT
                </a>
              </li>
              <li className="my-10">
                <a href={window.location.pathname === "/mint" ? "/#roadmap" : "#roadmap"}>
                  ROADMAP
                </a>
              </li>
              <li className="my-10">
                <a href={window.location.pathname === "/mint" ? "/#crew" : "#crew"}>
                  CREW
                </a>
              </li>
              <li className="my-10">
                <a href={window.location.pathname === "/mint" ? "/#faq" : "#faq"}>
                  FAQ
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
