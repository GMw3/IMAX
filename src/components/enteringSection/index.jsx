import React from 'react';

const videos = require('../../videos/entering_video1.mp4');

const EnteringSection = ({setScreen, screenValue}) => {

  const EnterSection = () =>{
    setScreen(!screenValue);
  }
  return (
    <>
      <header className="relative flex items-center justify-center h-screen  overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
          <source src={videos} type="video/mp4" />
        </video>
      </header>
      <div onClick={EnterSection} className="absolute top-[1050px] left-[1050px] flex justify-center items-center z-20">
        <button className="outline outline-2 m-4 p-3 px-14 text-white bg-transparent text-2xl hover:bg-white hover:text-red-900">
          ENTER
        </button>
      </div>
    </>
  );
};  

export default EnteringSection;
