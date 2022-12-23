import React from 'react'

import button_cross from '../../images/modal/button_cross.webp'
import button_fullscreen from '../../images/modal/button_fullscreen_white.webp'
import button_rewind from '../../images/modal/button_rewind_02.webp'
import button_pause from '../../images/modal/button_hold_02.webp'
import button_volume from '../../images/modal/button_unmute.webp'
import roadmap_vid from '../../videos/roadmap_hd.mp4'
import { useRef } from 'react'

import ReactPlayer from 'react-player'

const Roadmap = ({ enable_Modal }) => {
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  const fullscreen = () => {
    const current = playerRef.current
    if (current.requestFullscreen) {
      current.requestFullscreen()
    } else if (current.mozRequestFullScreen) {
      current.mozRequestFullScreen()
    } else if (current.webkitRequestFullscreen) {
      current.webkitRequestFullscreen()
    } else if (current.msRequestFullscreen) {
      current.msRequestFullscreen()
    }
    console.log(playerRef.current)
  }

  const exitFullscreen = () => {
    const current = playerRef.current
    if (current.requestFullscreen) {
      current.requestFullscreen()
    } else if (current.mozRequestFullScreen) {
      current.mozRequestFullScreen()
    } else if (current.webkitRequestFullscreen) {
      current.webkitRequestFullscreen()
    } else if (current.msRequestFullscreen) {
      current.msRequestFullscreen()
    }
  }

  const playPause = () => {
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
  }

  const muteUnmute = () => {
    videoRef.current.muted = videoRef.current.muted ? false : true
  }

  const rewind = () => {
    videoRef.current.currentTime -= 10
  }

  React.useLayoutEffect(() => {
    document.addEventListener('fullscreenchange', function (e) {
      videoRef.current.muted = !videoRef.current.muted
    })
  }, [])

  return (
    <div className="mb-14" data-aos="fade-up">
      <div className="text-red-700 font-semibold text-center   text-4xl pb-14 pt-10">
        ROADMAP
      </div>

      <div className="flex justify-center">
        <div ref={playerRef} className="relative w-[60%] masking-image flex justify-center items-center object-contain">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className="masking-image w-[100%]"
            onClick={() => fullscreen()}
          >
            <source src={roadmap_vid} type="video/mp4" />
            <p className="text-6xl">Qais</p>
          </video>

          <img className="absolute w-[60px] right-10 top-10 z-30" src={button_cross} alt="" />
          <img
            id='fullscreen-btn'
            className="absolute w-[60px]"
            src={button_fullscreen}
            alt=""
            onClick={() => fullscreen()}
          />
          <div className="absolute flex bottom-5">

            <img
              className="w-[60px]"
              src={button_rewind}
              alt=""
              onClick={() => rewind()}
            />
            <img
              className="w-[60px]"
              src={button_pause}
              alt=""
              onClick={() => playPause()}
            />
            <img
              className="w-[60px]"
              src={button_volume}
              alt=""
              onClick={() => muteUnmute()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
