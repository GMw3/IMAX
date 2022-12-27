import React from 'react'
import VideoPlayer from '../VideoPlayer'

const person = require('../../images/landing/magicien_crop.webp')
const trailer = require('../../videos/trailer_weabove3.mp4')
const LandingSection = () => {
  return (
    <>
      {/* <div className="flex pt-[6%] pr-7">
        <div className="flex w-full justify-start">
          <img src={person} alt="/" className="w-[80%]" />
        </div>
        <div className="masking-image w-[52%] pt-[7%]">
          <div className="flex justify-end overflow-hidden w-[102%] masking-image">
            <div className=" w-auto min-w-full min-h-full max-w-none flex justify-center">
              <VideoPlayer url={trailer} id={2} />
            </div>
            <video
              autoPlay
              loop
              muted
              className=" w-auto min-w-full min-h-full max-w-none flex justify-center"
            >
              <source src={trailer} type="video/mp4" />
            </video>
          </div>
        </div>
      </div> */}

      <div className="flex pt-[6%] pr-7">
        <div className="flex w-full justify-start">
          <img src={person} alt="/" className="w-[80%]" />
        </div>
        <div className="flex justify-end overflow-hidden w-[102%] masking-image">
          <div className=" w-auto min-w-full min-h-full max-w-none flex justify-center">
            <VideoPlayer url={trailer} id={2} />
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingSection
