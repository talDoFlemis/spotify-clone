import React from "react"
import { GiMicrophone } from "react-icons/gi"
import { MdQueueMusic, MdOutlineComputer } from "react-icons/md"
import { BsFillVolumeDownFill } from "react-icons/bs"
function AdditionalInfo() {
  return (
    <div className="flex items-center justify-center space-x-4 text-[#b3b3b3]">
      <GiMicrophone className="h-5 w-5" />
      <MdQueueMusic className="h-7 w-7" />
      <MdOutlineComputer className="h-5 w-5" />
      <BsFillVolumeDownFill className="h-7 w-7" />
    </div>
  )
}

export default AdditionalInfo
