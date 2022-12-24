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

  const handleFullscreen = () => {
    if (playerRef.current === document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      playerRef.current.requestFullscreen()
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
    document
      .getElementById('player')
      .addEventListener('fullscreenchange', () => {
        if (playerRef.current === document.fullscreenElement) {
          videoRef.current.muted = false
          document.getElementById('controls').classList.remove('hidden')
          document.getElementById('cross-btn').classList.remove('hidden')
          document.getElementById('fullscreen-btn').classList.add('hidden')
        } else {
          videoRef.current.muted = true
          document.getElementById('controls').classList.add('hidden')
          document.getElementById('cross-btn').classList.add('hidden')
          document.getElementById('fullscreen-btn').classList.remove('hidden')
        }
      })
  }, [])

  return (
    <div className="mb-14" data-aos="fade-up">
      <div className="text-red-700 font-semibold text-center   text-4xl pb-14 pt-10">
        ROADMAP
      </div>

      <div className="flex justify-center">
        <div
          id="player"
          ref={playerRef}
          className="relative w-[60%] masking-image flex justify-center items-center object-contain"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className="masking-image w-[100%]"
            onClick={() => handleFullscreen()}
          >
            <source src={roadmap_vid} type="video/mp4" />
            <p className="text-6xl">Qais</p>
          </video>

          <img
            id="cross-btn"
            className="absolute w-[60px] right-10 top-10 z-30 hidden"
            src={button_cross}
            alt=""
            onClick={() => handleFullscreen()}
          />
          <img
            id="fullscreen-btn"
            className="absolute w-[60px]"
            src={button_fullscreen}
            alt=""
            onClick={() => handleFullscreen()}
          />
          <div
            id="controls"
            className="absolute flex bottom-5 hidden w-[60%] gap-8 items-center"
          >
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
            <input
              type="range"
              min="1"
              max="100"
              // value="50"
              step="1"
              className="w-[100%] h-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
