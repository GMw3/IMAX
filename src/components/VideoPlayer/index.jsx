import button_cross from '../../images/modal/button_cross.webp'
import button_fullscreen from '../../images/modal/button_fullscreen_white.webp'
import button_rewind from '../../images/modal/button_rewind_02.webp'
import button_pause from '../../images/modal/button_hold_02.webp'
import button_volume from '../../images/modal/button_unmute.webp'
import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import {
  muteUnmute,
  rewind,
  playPause,
  handleFullscreen,
  handleAutoSeek,
  handleSeekByUser,
} from './videoController'

const index = ({ url, id }) => {
  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const [videoDuration, setVideoDuration] = useState(null)

  console.log(videoRef.current)
  useEffect(() => {
    if (videoRef.current) {
      setVideoDuration(Math.floor(videoRef.current.duration))
      console.log(videoRef.current.duration)
    }
  }, [videoRef])

  useLayoutEffect(() => {
    document
      .getElementById(`player-${id}`)
      .addEventListener('fullscreenchange', () => {
        if (playerRef.current === document.fullscreenElement) {
          videoRef.current.muted = false
          document.getElementById(`controls-${id}`).classList.remove('hidden')
          document.getElementById(`cross-btn-${id}`).classList.remove('hidden')
          document
            .getElementById(`fullscreen-btn-${id}`)
            .classList.add('hidden')
        } else {
          videoRef.current.muted = true
          document.getElementById(`controls-${id}`).classList.add('hidden')
          document.getElementById(`cross-btn-${id}`).classList.add('hidden')
          document
            .getElementById(`fullscreen-btn-${id}`)
            .classList.remove('hidden')
        }
      })
  }, [])

  return (
    <div
      id={`player-${id}`}
      ref={playerRef}
      className="relative masking-image flex justify-center items-center object-contain"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        onTimeUpdate={() => handleAutoSeek(id, videoRef)}
        className="masking-image w-[100%]"
        onClick={() => handleFullscreen(playerRef)}
      >
        <source src={url} type="video/mp4" />
      </video>

      <img
        id={`cross-btn-${id}`}
        className="absolute w-[60px] right-10 top-10 z-30 hidden"
        src={button_cross}
        alt=""
        onClick={() => handleFullscreen(playerRef)}
      />
      <img
        id={`fullscreen-btn-${id}`}
        className="absolute w-[60px]"
        src={button_fullscreen}
        alt=""
        onClick={() => handleFullscreen(playerRef)}
      />
      <div
        id={`controls-${id}`}
        className="absolute flex bottom-5 hidden w-[60%] gap-8 items-center"
      >
        <img
          className="w-[60px]"
          src={button_rewind}
          alt=""
          onClick={() => rewind(videoRef)}
        />
        <img
          className="w-[60px]"
          src={button_pause}
          alt=""
          onClick={() => playPause(videoRef)}
        />
        <img
          className="w-[60px]"
          src={button_volume}
          alt=""
          onClick={() => muteUnmute(videoRef)}
        />
        <div className="w-[100%]">
          <input
            id={`input-${id}`}
            type="range"
            min="0"
            max={`${videoDuration}`}
            defaultValue="0"
            step="1"
            onInput={() => handleSeekByUser(id, videoRef)}
            className="w-[100%] h-10"
          />
          <p id={`seek-value-${id}`} className="text-white"></p>
        </div>
      </div>
    </div>
  )
}

export default index
