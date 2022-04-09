import Navbar from "@components/home/Navbar"
import HomeLayout from "@components/layouts/HomeLayout"
import LoadingComponent from "@components/layouts/LoadingComponent"
import { useColor } from "color-thief-react"
import { useQuery } from "hooks/useQuery"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { EpisodeData } from "typings"

function Episode() {
  const router = useRouter()
  const { data: session } = useSession()
  const { data: episode, error } = useQuery<EpisodeData>(
    `/api/episodes/${router.query.id}`
  )

  console.log(episode)

  const { data: color } = useColor(episode?.images[1].url as string, "hex", {
    crossOrigin: "anonymous",
  })

  if (!episode && !error) {
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
              src={episode?.images[0].url as string}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="hidden text-sm sm:inline-flex ">EPISODE</h3>
            <h1 className="text-4xl font-bold sm:text-5xl xl:text-7xl">
              {episode?.name}
            </h1>
            <h2 className="hidden text-2xl sm:inline-flex">
              {episode?.show.publisher}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8 p-8">
        <h1 className="text-2xl">Episode Description</h1>
        <p className="text-[#a2a2a2] line-clamp-5">{episode?.description}</p>
      </div>
    </main>
  )
}

export default Episode

Episode.PageLayout = HomeLayout
