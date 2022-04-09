import { useQuery } from "hooks/useQuery"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { CurrentSongInfo, PlayerStatus } from "typings"

function SongInfo({ songInfo }: { songInfo: PlayerStatus["item"] }) {
  if (songInfo.type === "track") {
    return (
      <div className="hidden items-center space-x-4 sm:flex">
        <Link href={`/album/${songInfo.album.id}#${songInfo.id}`}>
          <a className="relative h-14 w-14">
            <Image
              src={songInfo?.album.images[2].url as string}
              alt={songInfo?.name}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
        <div className="flex flex-col">
          <Link href={`/album/${songInfo.album.id}#${songInfo.id}`}>
            <a className="text-sm hover:underline">{songInfo?.name}</a>
          </Link>
          <Link href={`/artists/${songInfo.artists[0].id}`}>
            <a className="text-xs text-[#9da799] hover:underline">
              {songInfo?.artists[0].name}
            </a>
          </Link>
        </div>
      </div>
    )
  }
  if (songInfo.type === "episode") {
    return (
      <div className="hidden items-center space-x-4 sm:flex">
        <Link href={`/shows/${songInfo.show.id}#${songInfo.id}`}>
          <a className="relative h-14 w-14">
            <Image
              src={songInfo?.images[2].url as string}
              alt={songInfo?.name}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
        <div className="flex flex-col">
          <Link href={`/episodes/${songInfo.id}`}>
            <a className="text-sm hover:underline">{songInfo?.name}</a>
          </Link>
          <Link href={`/shows/${songInfo.show.id}`}>
            <a className="text-xs text-[#9da799] hover:underline">
              {songInfo?.show.name}
            </a>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="hidden items-center space-x-4 sm:flex">
      <div className="relative h-14 w-14 bg-neutral-focus"></div>
    </div>
  )
}

export default SongInfo
