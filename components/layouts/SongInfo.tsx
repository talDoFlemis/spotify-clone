import { useQuery } from "hooks/useQuery"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { CurrentSongInfo, PlayerStatus } from "typings"

function SongInfo({ songInfo }: { songInfo: PlayerStatus["item"] }) {
  // const { data: songInfo, error } = useQuery<CurrentSongInfo>(
  //   "/api/getCurrentSongInfo"
  // )

  // console.log(songInfo)

  return (
    <div className="flex items-center space-x-4">
      <Link href="/songInfo/teste">
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
        <Link href="/songInfo/teste">
          <a className="text-sm hover:underline">{songInfo?.name}</a>
        </Link>
        <Link href="/artistInfo/teste">
          <a className="text-xs text-[#9da799] hover:underline">
            {songInfo?.artists[0].name}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SongInfo
