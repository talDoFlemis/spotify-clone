import Navbar from "@components/home/Navbar"
import HomeLayout from "@components/layouts/HomeLayout"
import LoadingComponent from "@components/layouts/LoadingComponent"
import ShowCard from "@components/shows/ShowCard"
import { useColor } from "color-thief-react"
import { useQuery } from "hooks/useQuery"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { ShowsData } from "typings"

function Show() {
  const router = useRouter()
  const { data: session } = useSession()

  const { data: show, error } = useQuery<ShowsData["show"]>(
    `/api/shows/${router.query.id}`
  )
  const { data: color } = useColor(show?.images[0].url as string, "hex", {
    crossOrigin: "anonymous",
  })

  if (!show && !error) {
    return <LoadingComponent />
  }

  return (
    <main className="flex w-full select-none flex-col font-spotifyFont text-white">
      <div
        className="w-full bg-gradient-to-b  to-spotifyBlack"
        style={{
          backgroundImage: `linear-gradient(to top, #121212,   ${color})`,
        }}
      >
        <Navbar
          username={session?.user.username}
          userimage={session?.user.image}
        />
        <div className="flex items-end space-x-6 overflow-hidden text-ellipsis p-8">
          <div className="relative h-32 w-32 flex-shrink-0 shadow-lg sm:h-60  sm:w-60">
            <Image
              src={show?.images[0].url as string}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="hidden text-sm sm:inline-flex ">PODCAST</h3>
            <h1 className="text-4xl font-bold sm:text-5xl xl:text-7xl">
              {show?.name}
            </h1>
            <h2 className="hidden text-2xl sm:inline-flex">
              {show?.publisher}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-8 p-8 xl:flex-row xl:space-x-8">
        <div className="flex flex-col">
          <h1 className="text-2xl">All Episodes</h1>
          {show?.episodes.items.map((episode) => (
            <ShowCard
              key={episode.id}
              id={episode.id}
              name={episode.name}
              image={episode.images[1].url}
              description={episode.description}
              release_date={episode.release_date}
              duration_ms={episode.duration_ms}
              explicit={episode.explicit}
            />
          ))}
        </div>
        <div className="flex flex-shrink-0 flex-col xl:w-3/12">
          <h1 className="text-2xl">About</h1>
          <p className="text-gray-500">{show?.description}</p>
        </div>
      </div>
    </main>
  )
}

export default Show

Show.PageLayout = HomeLayout
