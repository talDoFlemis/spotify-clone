import Image from "next/image"
import React from "react"
import cl from "clsx"
import Link from "next/link"

interface Props {
  className: string
  artistName: string
  image: string
  artistGenres: string | string[]
  id: string
}

function CardTopArtists({
  className,
  artistName,
  image,
  artistGenres,
  id,
}: Props) {
  return (
    <Link href={`/artists/${id}`}>
      <a
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
          <h3>{artistName}</h3>
          <p className="text-gray-500">{artistGenres}</p>
        </div>
      </a>
    </Link>
  )
}

export default CardTopArtists
