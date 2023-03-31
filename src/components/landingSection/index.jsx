import React from 'react'

import VideoPlayer from '../VideoPlayer'

const person = require('../../images/landing/magicien_crop.webp')
const trailer = require('../../videos/trailer_weabove3.mp4')

const LandingSection = () => {
  return (
    <>
      <div className="flex pt-[6%] pr-7">
        <div className="flex w-full justify-start mt-[20%] sm:mt-[10%] md:mt-[5%]">
          <img src={person} alt="/" className="w-[60%]" />
        </div>
        <div className="flex justify-end overflow-hidden w-[102%] masking-image mt-[20%] sm:mt-[10%] md:mt-[5%]">
          <div className=" w-auto min-w-full min-h-full max-w-none flex justify-center">
            <VideoPlayer url={trailer} id={2} />
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingSection
