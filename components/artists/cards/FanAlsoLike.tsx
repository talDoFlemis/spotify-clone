import Image from "next/image"
import Link from "next/link"
import React from "react"
import cl from "clsx"

interface Props {
  id: string
  image: string
  name: string
  className?: string
}

function FanAlsoLike({ image, className, id, name }: Props) {
  return (
    <Link href={`/artists/${id}`}>
      <a
        className={cl(
          className,
          " mx-auto flex w-64 cursor-pointer select-none flex-col rounded-md bg-neutral/30 p-4 transition-colors duration-300 hover:bg-neutral/90 sm:w-full"
        )}
      >
        <Image
          src={image}
          alt="text"
          className="rounded-full shadow-md"
          height={300}
          width={300}
        />
        <div className="mt-4 pb-4">
          <h3 className="line-clamp-1">{name}</h3>
          <p className="text-sm text-[#6b727c]">Artist</p>
        </div>
      </a>
    </Link>
  )
}

export default FanAlsoLike
