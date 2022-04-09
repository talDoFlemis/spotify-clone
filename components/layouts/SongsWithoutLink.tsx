import Image from "next/image"
import React, { useRef } from "react"
import cl from "clsx"

interface Props {
  isHighlighted?: boolean
  albumId: string
  songId?: string
  songUri?: string
  index: number
  name: string
  image?: string
  album: string
  duration_ms: number
  artists: string | string[]
}
import { millisMinutesAndSeconds } from "lib/time"
import Link from "next/link"
import { useQuery } from "hooks/useQuery"
import { CurrentSongInfo } from "typings"
import AudioPlaying from "./AudioPlaying"

function SongsWithoutLink({
  isHighlighted,
  songId,
  songUri,
  name,
  image,
  artists,
  index,
  album,
  duration_ms,
}: Props) {
  const { data: currentSong } = useQuery<CurrentSongInfo>(
    "/api/getCurrentSongInfo"
  )

  return (
    <a
      className="group grid cursor-pointer grid-cols-2 rounded-lg px-3 py-1 text-[#8f8a8a] hover:bg-white/10"
      id={songUri as string}
      role="row"
      aria-selected={isHighlighted}
    >
      <div className="flex items-center space-x-4">
        {currentSong?.item.id === songId ? (
          <AudioPlaying className="h-4 w-4 text-primary" />
        ) : (
          <p className="w-4">{index + 1}</p>
        )}
        {image && (
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image src={image} alt={album} layout="fill" objectFit="cover" />
          </div>
        )}
        <div className="flex flex-col">
          <h1
            className={cl(
              currentSong?.item.id === songId ? "text-primary" : "text-white",
              "w-32 truncate lg:w-64"
            )}
          >
            {name}
          </h1>
          <h3 className="trucante">{artists}</h3>
        </div>
      </div>
      <div className="flex items-center  justify-end sm:justify-between">
        <p className="hidden w-32 truncate group-hover:text-white sm:inline-flex lg:w-64">
          {album}
        </p>
        <p>{millisMinutesAndSeconds(duration_ms)}</p>
      </div>
    </a>
  )
}

export default SongsWithoutLink
