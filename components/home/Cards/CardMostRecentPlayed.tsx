import React from "react"
// import { GiPauseButton } from "react-icons/gi"
// import { BsFillPlayFill } from "react-icons/bs"
import Image from "next/image"

interface Props {
  text: string
  image: string
  className?: string | string[]
}

function CardMostRecentPlayed({ text, image, className }: Props) {
  // const [isPaused, setIsPaused] = useState(true)

  return (
    <div
      className={`${className} flex h-full cursor-pointer select-none items-center justify-between overflow-hidden rounded-md bg-neutral-focus/60 transition-colors duration-300 hover:bg-neutral-focus/90`}
    >
      <div className="flex items-center space-x-4">
        <div className="relative h-20 w-20 ">
          <Image src={image} layout="fill" objectFit="fill" alt="gon" />
        </div>
        <p className="w-64 truncate sm:w-16 md:w-24  xl:w-32 ">{text}</p>
      </div>
      {/* <div className="mr-6 hidden h-12 w-12 cursor-default rounded-full bg-primary p-2 shadow-md transition-all hover:scale-105 md:inline-flex">
        {isPaused ? (
          <GiPauseButton
            className="h-full w-full p-1 text-black"
            onClick={() => setIsPaused(!isPaused)}
          />
        ) : (
          <BsFillPlayFill
            className="h-full w-full pl-1 text-black"
            onClick={() => setIsPaused(!isPaused)}
          />
        )}
      </div> */}
    </div>
  )
}

export default CardMostRecentPlayed
