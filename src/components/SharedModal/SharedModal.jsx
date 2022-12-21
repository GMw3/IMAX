import React from "react";

import button_cross from "../../images/modal/button_cross.webp";

const SharedModal = ({ video_src, closeModal }) => {
  return (
    <div className="fixed inset-0 flex justify-center z-10 bg-opacity-50 items-center bg-slate-700">
      <div className="flexbg-slate-500">
        <div
          className="flex justify-end mb-1"
          onClick={() => closeModal(false)}
        >
          <img className="w-[60px]" src={button_cross} alt="" />
        </div>
        <div>
          <video className=" mx-auto" src={video_src} controls></video>
        </div>
      </div>
    </div>
  );
};

export default SharedModal;
