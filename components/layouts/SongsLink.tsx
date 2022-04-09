import Image from "next/image"
import React, { useState } from "react"
import { millisMinutesAndSeconds } from "lib/time"
import Link from "next/link"
import { BsFillPlayFill } from "react-icons/bs"
import { useQuery } from "hooks/useQuery"
import { PlayerStatus } from "typings"
import AudioPlaying from "./AudioPlaying"

interface Props {
  albumId: string
  songId?: string
  index: number
  name: string
  image?: string
  album: string
  duration_ms: number
  artistId: string
  artists: string | string[]
}

function SongsLink({
  albumId,
  songId,
  name,
  image,
  artistId,
  artists,
  index,
  album,
  duration_ms,
}: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const { data: currentSong } = useQuery<PlayerStatus>("/api/player")

  if (
    currentSong?.item.type === "disabled" ||
    songId !== currentSong?.item.id
  ) {
    return (
      <div
        className="group grid cursor-pointer grid-cols-2 rounded-lg px-3 py-1 text-[#8f8a8a] hover:bg-white/10"
        id={songId}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center space-x-4">
          {isHovered ? (
            <BsFillPlayFill className="h-4 w-4" />
          ) : (
            <p className="w-4">{index + 1}</p>
          )}
          {image && (
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image src={image} alt={album} layout="fill" objectFit="cover" />
            </div>
          )}
          <div className="flex flex-col">
            <h1 className="w-32 truncate text-white lg:w-64">{name}</h1>
            <Link href={`/artists/${artistId}`}>
              <a className="truncate hover:text-white hover:underline">
                {artists}
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center  justify-end sm:justify-between">
          <Link href={`/album/${albumId}#${songId}`} scroll={false}>
            <a className="hidden w-32 truncate hover:underline group-hover:text-white sm:inline-flex lg:w-64">
              {album}
            </a>
          </Link>
          <p>{millisMinutesAndSeconds(duration_ms)}</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="group grid cursor-pointer grid-cols-2 rounded-lg px-3 py-1 text-[#8f8a8a] hover:bg-white/10"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-4">
        {currentSong?.item.id === songId ? (
          <AudioPlaying className="h-4 w-4 text-primary" />
        ) : (
          <p className="w-3">{index + 1}</p>
        )}
        {image && (
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image src={image} alt={album} layout="fill" objectFit="cover" />
          </div>
        )}
        <div className="flex flex-col">
          <h1 className="w-32 truncate text-primary lg:w-64">{name}</h1>
          <Link href={`/artists/${artistId}`}>
            <a className="truncate hover:text-white hover:underline">
              {artists}
            </a>
          </Link>
        </div>
      </div>
      <div className="flex items-center  justify-end sm:justify-between">
        <Link href={`/album/${albumId}#${songId}`} scroll={false}>
          <a className="hidden w-32 truncate hover:underline group-hover:text-white sm:inline-flex lg:w-64">
            {album}
          </a>
        </Link>
        <p>{millisMinutesAndSeconds(duration_ms)}</p>
      </div>
    </div>
  )
}

export default SongsLink
