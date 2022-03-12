import Image from "next/image"
import React from "react"
import cl from "clsx"

interface Props {
  image: string
  trackName: string
  artists: string | string[]
  className: string
}

function CardTopTracks({ image, trackName, artists, className }: Props) {
  return (
    <div
      className={cl(
        className,
        "mx-auto flex w-60 cursor-pointer select-none flex-col rounded-md bg-neutral/30 p-4 transition-colors duration-300 hover:bg-neutral/90 sm:w-full"
      )}
    >
      <Image
        src={image}
        alt="text"
        className="rounded-md"
        height={200}
        width={200}
      />
      <div className="mt-4">
        <h3>{trackName}</h3>
        <p className="text-gray-500">{artists}</p>
      </div>
    </div>
  )
}

export default CardTopTracks
