import React from "react";

import group7left from "../../images/footer/group7left.webp";
import group7right from "../../images/footer/group7right.webp";
import footerLeft from "../../images/footer/footerLeft.webp";
import line from "../../images/footer/line.svg";
import mask_title from "../../images/footer/mask_title.svg";
import ming from "../../images/footer/ming.svg";
import logo_twitter from "../../images/footer/logo_twitter.webp";

const Footer = () => {
  return (
    <div className="bg-[#313244] text-center py-10 mt-32">
      <div className="flex justify-center mx-4">
        <div className="flex-col w-full ">
          <div className="flex justify-start h-fit space-x-2 ml-[20%]">
            <img className="w-[50px]" src={mask_title} alt="" />
            <p className="text-white text-xs font-bold">CREATED BY</p>
          </div>

          <div className="flex justify-center pt-6 ml-16">
            <img className="w-[30%] lg:w-[20%]" src={ming} alt="" />
          </div>
        </div>

        <div className="pr-9">
          <img className="h-full object-cover" src={line} alt="" />
        </div>

        <div className="flex-col w-full">
          <div className="flex justify-end h-fit space-x-2  mr-[20%]">
            <p className="text-white  text-xs font-bold">JOIN US</p>
            <img className="w-[50px]" src={mask_title} alt="" />
          </div>
          <div className="flex justify-center pt-4 flex-wrap w-[100px] lg:w-[140px]">
            <img
              src={logo_twitter}
              alt=""
              className="w-[50px] lg:w-[70px] p-2"
            />
            <img
              src={logo_twitter}
              alt=""
              className="w-[50px] lg:w-[70px] p-2"
            />
            <img
              src={logo_twitter}
              alt=""
              className="w-[50px] lg:w-[70px] p-2"
            />
            <img
              src={logo_twitter}
              alt=""
              className="w-[50px] lg:w-[70px] p-2"
            />
          </div>
        </div>
      </div>

      <div className="pt-10">
        <span className="text-[#a5b4bd]">Terms & Condition</span>
      </div>
      <div className="flex mx-4 justify-evenly pt-4">
        <div className="w-1/3">
          <img className="w-[60px]" src={group7left} alt="" />
          <img src={footerLeft} alt="" />
        </div>
        <p className="text-white font-extrabold text-xs md:text-lg">
          Licensed By WeAbove
        </p>
        <div className="w-1/3 pb-7">
          <div className="flex justify-end">
            <img className="w-[60px]" src={group7right} alt="" />
          </div>
          <img src={footerLeft} alt="" />
        </div>
      </div>
      <span className="text-[#fc4a6a] font-bold">© WEABOVE 2022</span>
    </div>
  );
};

export default Footer;
