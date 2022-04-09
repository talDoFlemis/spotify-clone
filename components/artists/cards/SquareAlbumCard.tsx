import Image from "next/image"
import React from "react"
import cl from "clsx"
import Link from "next/link"

interface Props {
  id: string
  text: string
  image: string
  release_date: string
  album_type: string
  className?: string
}

function SquareAlbumCard({
  id,
  text,
  image,
  className,
  release_date,
  album_type,
}: Props) {
  const getOnlyYear = new Date(release_date).getFullYear()
  return (
    <Link href={`/album/${id}`}>
      <a
        className={cl(
          className,
          " mx-auto flex w-64 cursor-pointer select-none flex-col rounded-md bg-neutral/30 p-4 transition-colors duration-300 hover:bg-neutral/90 sm:w-full"
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
          <h3 className="line-clamp-1">{text}</h3>
          <p className="text-gray-500">
            {getOnlyYear} • {album_type}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default SquareAlbumCard
