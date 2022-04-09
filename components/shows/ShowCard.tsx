import { millisHoursAndMinutesAndSeconds } from "@lib/time"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { MdExplicit } from "react-icons/md"

interface Props {
  id: string
  image: string
  description: string
  release_date: string
  name: string
  duration_ms: number
  explicit: boolean
}

function ShowCard({
  id,
  image,
  duration_ms,
  description,
  release_date,
  name,
  explicit,
}: Props) {
  return (
    <Link href={`/episodes/${id}`}>
      <a className="shows_line relative flex cursor-pointer space-x-4 rounded-lg p-4 text-[#8f8a8a] hover:bg-neutral-focus/60">
        <div className="relative h-32 w-32 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-white">{name}</h1>
          <p className="w-full text-ellipsis text-sm line-clamp-2">
            {description}
          </p>
          <div className="flex items-center space-x-2">
            <h1 className="hidden sm:inline-flex">play</h1>
            <h3>{explicit && <MdExplicit className="h-6 w-6" />}</h3>
            <h3 className="hidden sm:inline-flex">
              {new Date(release_date).toLocaleDateString()}
            </h3>
            <h3>{millisHoursAndMinutesAndSeconds(duration_ms)}</h3>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ShowCard
