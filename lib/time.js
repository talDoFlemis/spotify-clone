export function millisMinutesAndSeconds(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000)
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0)
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
}

export function millisHoursAndMinutesAndSeconds(milliseconds) {
  const d = new Date(1000 * Math.round(milliseconds / 1000)) // round to nearest second
  function pad(i) {
    return ("0" + i).slice(-2)
  }
  const str = d.getUTCHours() + "hr " + pad(d.getUTCMinutes()) + "min "

  return str
}
