import Image from "next/image"
import React from "react"
import cl from "clsx"
import Link from "next/link"

interface Props {
  id: string
  text: string
  image: string
  publisher: string
  className: string
}

function CardYourShows({ id, text, image, publisher, className }: Props) {
  return (
    <Link href={`/shows/${id}`}>
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
          <h3>{text}</h3>
          <p className="text-gray-500">{publisher}</p>
        </div>
      </a>
    </Link>
  )
}

export default CardYourShows
