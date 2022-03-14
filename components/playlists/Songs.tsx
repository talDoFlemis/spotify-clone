import Image from "next/image"
import React from "react"

interface Props {
  index: number
  name: string
  image: string
  album: string
  duration_ms: number
  artists: string | string[]
}
import { millisMinutesAndSeconds } from "lib/time"

function Songs({ name, image, artists, index, album, duration_ms }: Props) {
  return (
    <div className="group grid cursor-pointer grid-cols-2 rounded-lg px-3 py-1 text-[#8f8a8a] hover:bg-white/10">
      <div className="flex items-center space-x-4">
        <p className="w-3">{index + 1}</p>
        <div className="relative h-10 w-10 flex-shrink-0">
          <Image src={image} alt={album} layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col">
          <h1 className="w-32 truncate text-white lg:w-64">{name}</h1>
          <h3 className="trucante">{artists}</h3>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="w-32 truncate group-hover:text-white lg:w-64">{album}</p>
        <p>{millisMinutesAndSeconds(duration_ms)}</p>
      </div>
    </div>
  )
}

export default Songs
