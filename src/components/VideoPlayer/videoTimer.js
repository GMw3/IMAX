const videoTimer = (videoRef) => {
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
export default videoTimer