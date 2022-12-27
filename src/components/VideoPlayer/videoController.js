import videoTimer from './videoTimer'

export const playPause = (videoRef) => {
  videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
}

export const muteUnmute = (videoRef) => {
  videoRef.current.muted = videoRef.current.muted ? false : true
}

export const rewind = (videoRef) => {
  videoRef.current.currentTime -= 10
}

export const handleAutoSeek = (id, videoRef) => {
  document.getElementById(`input-${id}`).value = Math.floor(
    videoRef.current.currentTime,
  )
  document.getElementById(`seek-value-${id}`).innerText = videoTimer(videoRef)
}

export const handleSeekByUser = (id, videoRef) => {
  videoRef.current.currentTime = document.getElementById(`input-${id}`).value
  document.getElementById(`seek-value-${id}`).innerText = videoTimer(videoRef)
}

export const handleFullscreen = (playerRef) => {
  if (playerRef.current === document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    playerRef.current.requestFullscreen()
  }
}
