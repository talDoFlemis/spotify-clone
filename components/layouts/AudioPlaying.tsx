import React from "react"
import AudioWave from "@svgs/audio.svg"
function AudioPlaying({ className }: { className: string | string[] }) {
  return <AudioWave className={className} />
}

export default AudioPlaying
