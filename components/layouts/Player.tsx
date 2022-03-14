import React, { useState } from "react"
import { FaRandom } from "react-icons/fa"
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi"
import { RiRepeat2Fill } from "react-icons/ri"
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs"
import { useQuery } from "hooks/useQuery"
import { PlayerStatus } from "typings"
import cl from "clsx"

function Player({ playerStatus }: { playerStatus: PlayerStatus }) {
  const [isPlayed, setIsPlayed] = useState(false)
  console.log(playerStatus)
  return (
    <div className="flex flex-col items-center text-[#b3b3b3]">
      <div className="flex items-center justify-center space-x-4">
        <FaRandom
          className={cl(
            playerStatus.shuffle_state && "text-primary",
            "h-5 w-5 transition-colors hover:text-white"
          )}
        />
        <BiSkipPrevious className="h-10 w-10 transition-colors hover:text-white" />
        {playerStatus.is_playing ? (
          <div
            className="rounded-full bg-white transition-all hover:scale-105"
            onClick={() => setIsPlayed(!isPlayed)}
          >
            <BsFillPauseFill className="h-10 w-10 p-1 text-black" />
          </div>
        ) : (
          <div
            className="rounded-full bg-white transition-all hover:scale-105"
            onClick={() => setIsPlayed(!isPlayed)}
          >
            <BsFillPlayFill className="h-10 w-10 pl-1 text-black" />
          </div>
        )}
        <BiSkipNext className="h-10 w-10 transition-colors hover:text-white" />
        <RiRepeat2Fill
          className={cl(
            playerStatus.repeat_state !== "off" && "text-primary",
            "h-5 w-5 transition-colors hover:text-white"
          )}
        />
      </div>
    </div>
  )
}

export default Player
