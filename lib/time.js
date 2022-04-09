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

  let str

  if (d.getUTCHours() < 1) {
    return (str =
      pad(d.getUTCMinutes()) + "min " + pad(d.getUTCSeconds()) + "sec")
  }

  str = d.getUTCHours() + "hr " + pad(d.getUTCMinutes()) + "min "

  return str
}
export function millisHoursEtcWithoutText(milliseconds) {
  const d = new Date(1000 * Math.round(milliseconds / 1000)) // round to nearest second
  function pad(i) {
    return ("0" + i).slice(-2)
  }

  let str

  if (d.getUTCHours() < 1) {
    return (str = pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()))
  }

  str =
    d.getUTCHours() +
    ":" +
    pad(d.getUTCMinutes()) +
    ":" +
    pad(d.getUTCSeconds())

  return str
}
