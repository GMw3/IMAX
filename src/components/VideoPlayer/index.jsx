import button_cross from '../../images/modal/button_cross.webp'
import button_fullscreen from '../../images/modal/button_fullscreen_white.webp'
import button_rewind from '../../images/modal/button_rewind_02.webp'
import button_pause from '../../images/modal/button_hold_02.webp'
import button_volume from '../../images/modal/button_unmute.webp'
import { useRef, useLayoutEffect, useEffect } from 'react'

const index = ({ url, id }) => {
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  const handleFullscreen = () => {
    if (playerRef.current === document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      playerRef.current.requestFullscreen()
    }
  }

  const handleAutoSeek = () => {
    document.getElementById(`input-${id}`).value = Math.floor(
      videoRef.current.currentTime,
    )

    document.getElementById(`seek-value-${id}`).innerText = videoTimer()
  }

  const videoTimer = () => {
    const currentTime = Math.round(videoRef.current.currentTime)
    var currentSeconds = currentTime % 60
    var currentMinutes = Math.floor(currentTime / 60) % 60
    var currentHours = Math.round(Math.floor(currentTime / 3600))
    if (currentSeconds === 0) {
      currentSeconds = '00'
    } else if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`
    }
    if (currentMinutes === 0) {
      currentMinutes = '00'
    } else if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`
    }
    if (currentHours === 0) {
      currentHours = '00'
    } else if (currentHours < 10) {
      currentHours = `0${currentHours}`
    }

    const duration = Math.round(videoRef.current.duration)
    var Seconds = duration % 60
    var Minutes = Math.floor(duration / 60) % 60
    var Hours = Math.round(Math.floor(duration / 3600))
    if (Seconds === 0) {
      Seconds = '00'
    } else if (Seconds < 10) {
      Seconds = `0${Seconds}`
    }
    if (Minutes === 0) {
      Minutes = '00'
    } else if (Minutes < 10) {
      Minutes = `0${Minutes}`
    }
    if (Hours === 0) {
      Hours = '00'
    } else if (Hours < 10) {
      Hours = `0${Hours}`
    }
    return `${currentHours}:${currentMinutes}:${currentSeconds} / ${Hours}:${Minutes}:${Seconds}`
  }

  const handleSeekByUser = () => {
    videoRef.current.currentTime = document.getElementById(`input-${id}`).value
    document.getElementById(
      `seek-value-${id}`,
    ).innerText = videoTimer()
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

  // useEffect(() => {
  //   document.getElementById(`input-${id}`).max = Math.floor(videoRef.current.duration)
  //   console.log(document.getElementById(`input-${id}`).max)
  //   console.log(videoRef.current.duration)
  // }, [videoRef])

  useLayoutEffect(() => {
    document.getElementById(`input-${id}`).max = Math.floor(videoRef.current.duration)
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
        onTimeUpdate={() => handleAutoSeek()}
        className="masking-image w-[100%]"
        onClick={() => handleFullscreen()}
      >
        <source src={url} type="video/mp4" />
      </video>

      <img
        id={`cross-btn-${id}`}
        className="absolute w-[60px] right-10 top-10 z-30 hidden"
        src={button_cross}
        alt=""
        onClick={() => handleFullscreen()}
      />
      <img
        id={`fullscreen-btn-${id}`}
        className="absolute w-[60px]"
        src={button_fullscreen}
        alt=""
        onClick={() => handleFullscreen()}
      />
      <div
        id={`controls-${id}`}
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
        <div className="w-[100%]">
          <input
            id={`input-${id}`}
            type="range"
            min="0"
            max="0"
            value="0"
            step="1"
            onInput={() => handleSeekByUser()}
            className="w-[100%] h-10"
          />
          <p id={`seek-value-${id}`} className="text-white"></p>
        </div>
      </div>
    </div>
  )
}

export default index
