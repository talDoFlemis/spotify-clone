import Navbar from "@components/home/Navbar"
import HomeLayout from "@components/layouts/HomeLayout"
import LoadingComponent from "@components/layouts/LoadingComponent"
import { useQuery } from "hooks/useQuery"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { AlbumsData, CurrentSongInfo } from "typings"
import { millisHoursAndMinutesAndSeconds } from "lib/time"
import { useColor } from "color-thief-react"
import SongsWithoutLink from "@components/layouts/SongsWithoutLink"

function AlbumDetails() {
  const router = useRouter()
  const { data: session } = useSession()
  const isSelected = router.query.highlight

  const { data: album, error } = useQuery<AlbumsData>(
    `/api/album/${router.query.id}`
  )

  const { data: color } = useColor(album?.images[0].url as string, "hex", {
    crossOrigin: "anonymous",
  })

  if (!album && !error) {
    return <LoadingComponent />
  }

  const getalbumDurationMillis = album?.tracks.items.reduce(
    (acc, curr) => curr.duration_ms + acc,
    0
  ) as number
  const albumDuration = millisHoursAndMinutesAndSeconds(getalbumDurationMillis)

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
          <div className="relative h-32 w-32 flex-shrink-0 shadow-lg md:h-60 md:w-60">
            {album?.images[0].url && (
              <Image
                src={album?.images[0].url as string}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
          <div>
            <h3 className="text-sm ">ALBUM</h3>
            <h1 className="text-3xl font-bold md:text-5xl">{album?.name}</h1>
            <div className="flex">
              <span>
                {album?.artists[0].name} ꞏ{" "}
                {new Date(album?.release_date as string).getFullYear()} ꞏ{" "}
                {album?.tracks.total} songs ꞏ {albumDuration}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8" role={"presentation"}>
        {album?.tracks.items.map((track, index) => (
          <SongsWithoutLink
            isHighlighted={track.uri === isSelected}
            songId={track.id}
            songUri={track.uri}
            albumId={album.id}
            key={track.id}
            index={index}
            name={track.name}
            artists={track.artists
              .slice(0, 3)
              .map((artist) => artist.name)
              .join(", ")}
            album={album.name}
            duration_ms={track.duration_ms}
          />
        ))}
      </div>
    </main>
  )
}

export default AlbumDetails

AlbumDetails.PageLayout = HomeLayout
