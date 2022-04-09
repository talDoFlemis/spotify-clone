import React, { useEffect, useState } from "react"
import { FaRandom } from "react-icons/fa"
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi"
import { RiRepeat2Fill } from "react-icons/ri"
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs"
import { PlayerStatus } from "typings"
import cl from "clsx"
import { millisHoursEtcWithoutText } from "@lib/time"
import { useSWRConfig } from "swr"

function Player({ playerStatus }: { playerStatus: PlayerStatus }) {
  const { mutate } = useSWRConfig()

  const [isPlayed, setIsPlayed] = useState(false)
  const [progressBarTime, setProgressBarTime] = useState<number>(
    playerStatus.progress_ms
  )

  useEffect(() => {
    setProgressBarTime(playerStatus.progress_ms)
    const intervalId = setInterval(() => {
      setProgressBarTime((prev) => {
        if (prev >= playerStatus?.item?.duration_ms) {
          clearInterval(intervalId)
          mutate("/api/player")
          mutate("/api/getRecentlyPlayed")

          return playerStatus?.item?.duration_ms
        } else {
          return prev + 1000
        }
      })
    }, 1000)
    return () => clearInterval(intervalId)
  }, [playerStatus.progress_ms])

  if (playerStatus.item.type !== "disabled") {
    return (
      <div className="col-span-3 flex flex-col items-center self-center text-[#b3b3b3] sm:col-span-1">
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
        <div className="mt-2 flex w-full items-center justify-between space-x-2 text-sm">
          <h1>{millisHoursEtcWithoutText(progressBarTime)}</h1>
          <progress
            className="progress_bar progress  bg-[#535353] hover:progress-primary "
            value={progressBarTime}
            max={playerStatus.item.duration_ms}
          ></progress>
          <h1>{millisHoursEtcWithoutText(playerStatus.item.duration_ms)}</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center self-center text-[#b3b3b3]">
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
      <div className="mt-2 flex w-full flex-col items-center justify-between space-x-2 text-sm">
        <progress
          className="progress_bar progress bg-[#535353] hover:progress-primary"
          value={0}
          max={100}
        ></progress>
      </div>
    </div>
  )
}

export default Player
