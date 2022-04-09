import { millisMinutesAndSeconds } from "@lib/time"
import Image from "next/image"
import React from "react"

interface Props {
  index: number
  image: string
  name: string
  duration_ms: number
}

function PopularSong({ index, image, name, duration_ms }: Props) {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 hover:bg-white/10">
      <div className="flex items-center space-x-4">
        <p className="w-4">{index + 1}</p>
        <div className="flex items-center space-x-4">
          <div className="relative h-10 w-10 flex-grow-0">
            <Image src={image} alt={name} layout="fill" objectFit="cover" />
          </div>
          <h1>{name}</h1>
        </div>
      </div>
      <div>{millisMinutesAndSeconds(duration_ms)}</div>
    </div>
  )
}

export default PopularSong
