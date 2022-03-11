import Image from "next/image"
import React from "react"

interface Props {
  text: string
  image: string
}

function CardYourShows({ text, image }: Props) {
  return (
    <div className=" flex w-full cursor-pointer select-none flex-col rounded-md bg-neutral/50 p-4 transition-colors duration-300 hover:bg-neutral/90">
      <Image
        src={image}
        alt="text"
        className="rounded-md"
        height={200}
        width={200}
      />
      <div className="mt-4">
        <h3>{text}</h3>
        <p className="text-gray-500">User</p>
      </div>
    </div>
  )
}

export default CardYourShows
