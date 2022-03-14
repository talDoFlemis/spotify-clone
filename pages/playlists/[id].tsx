import Navbar from "@components/home/Navbar"
import HomeLayout from "@components/layouts/HomeLayout"
import LoadingComponent from "@components/layouts/LoadingComponent"
import Songs from "@components/playlists/Songs"
import { useQuery } from "hooks/useQuery"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { PlaylistData } from "typings"
import { millisHoursAndMinutesAndSeconds } from "lib/time"
import { useColor } from "color-thief-react"

function PlaylistDetails() {
  const router = useRouter()
  const { data: session } = useSession()

  const { data: playlist, error } = useQuery<PlaylistData>(
    `/api/playlists/${router.query.id}`
  )
  const { data } = useColor(playlist?.images[0].url as string, "hex", {
    crossOrigin: "anonymous",
  })

  const color = "#bf".concat(data?.replace("#", "") as string)

  if (!playlist && !error) {
    return <LoadingComponent />
  }

  const getPlaylistDurationMillis = playlist?.tracks.items.reduce(
    (acc, curr) => curr.track.duration_ms + acc,
    0
  ) as number
  const playlistDuration = millisHoursAndMinutesAndSeconds(
    getPlaylistDurationMillis
  )

  return (
    <main className="flex w-full select-none flex-col font-spotifyFont text-white">
      <div
        className="w-full bg-gradient-to-b  to-spotifyBlack"
        style={{
          backgroundImage: `linear-gradient(to top, #121212,   ${color})`,
        }}
      >
        <Navbar username={session?.user.username} />
        <div className="flex items-end space-x-6 overflow-hidden text-ellipsis p-8">
          <div className="relative h-60 w-60 flex-shrink-0 shadow-lg">
            <Image
              src={playlist?.images[0].url as string}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h3 className="text-sm ">PLAYLIST</h3>
            <h1 className="text-5xl font-bold">{playlist?.name}</h1>
            <div className="flex">
              <span>
                {playlist?.owner.display_name} ꞏ {playlist?.followers.total}{" "}
                likes ꞏ {playlist?.tracks.total} songs ꞏ {playlistDuration}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        {playlist?.tracks.items.map((track, index) => (
          <Songs
            key={track.track.id}
            index={index}
            name={track.track.name}
            artists={track.track.artists
              .slice(0, 3)
              .map((artist) => artist.name)
              .join(", ")}
            image={track.track.album.images[2].url}
            album={track.track.album.name}
            duration_ms={track.track.duration_ms}
          />
        ))}
      </div>
    </main>
  )
}

export default PlaylistDetails

PlaylistDetails.PageLayout = HomeLayout
