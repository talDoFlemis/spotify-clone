import React from "react"
import { GiMicrophone } from "react-icons/gi"
import { MdQueueMusic, MdOutlineComputer } from "react-icons/md"
import { BsFillVolumeDownFill } from "react-icons/bs"
import { PlayerStatus } from "typings"

function AdditionalInfo({ device }: { device: PlayerStatus["device"] }) {
  return (
    <div className="hidden items-center justify-center space-x-4 justify-self-end text-[#b3b3b3] sm:flex">
      <GiMicrophone className="h-5 w-5" />
      <MdQueueMusic className="h-7 w-7" />
      <MdOutlineComputer className="h-5 w-5" />
      <div className="flex w-32 items-center">
        <BsFillVolumeDownFill className="h-9 w-9" />
        <progress
          value={device ? device.volume_percent : 50}
          max={100}
          className="progress_bar progress bg-[#535353] hover:progress-primary"
        ></progress>
      </div>
    </div>
  )
}

export default AdditionalInfo
