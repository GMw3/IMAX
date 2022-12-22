import React from 'react';

const videos = require('../../videos/entering_video1.mp4');

const EnteringSection = ({setScreen, screenValue}) => {

  const EnterSection = () =>{
    setScreen(!screenValue);
  }
  return (
    <>
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-auto min-w-full min-h-full">
          <source src={videos} type="video/mp4" />
        </video>
      <div onClick={EnterSection} className="relative top-[40%] flex justify-center">
        <button className="outline outline-2 m-4 p-3 px-14 text-white bg-transparent text-2xl hover:bg-white hover:text-red-900">
          ENTER
        </button>
      </div>
      </div>
    </>
  );
};  

export default EnteringSection;
