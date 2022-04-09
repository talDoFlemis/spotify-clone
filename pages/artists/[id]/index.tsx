import Navbar from "@components/home/Navbar"
import HomeLayout from "@components/layouts/HomeLayout"
import LoadingComponent from "@components/layouts/LoadingComponent"
import { useQuery } from "hooks/useQuery"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { AlbumsData, RecentlyPlayedData, TopArtistsData } from "typings"
import { useColor } from "color-thief-react"
import SquareAlbumCard from "@components/artists/cards/SquareAlbumCard"
import cl from "clsx"
import PopularSong from "@components/artists/cards/PopularSong"
import FanAlsoLike from "@components/artists/cards/FanAlsoLike"
import Link from "next/link"

function ArtistDetails() {
  const router = useRouter()
  const { data: session } = useSession()

  const { data: artist, error } = useQuery<TopArtistsData>(
    `/api/artists/${router?.query.id}`
  )

  const { data: artistTopTracks } = useQuery<RecentlyPlayedData["track"][]>(
    `/api/artists/${router.query.id}/top-tracks`
  )

  const { data: artistAlbums } = useQuery<AlbumsData[]>(
    `/api/artists/${router.query.id}/albums`
  )

  const { data: relatedArtists } = useQuery<AlbumsData[]>(
    `/api/artists/${router.query.id}/related-artists`
  )

  const { data: color } = useColor(artist?.images[0].url as string, "hex", {
    crossOrigin: "anonymous",
  })

  if (!artist && !error) {
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
          <div className="relative h-60 w-60 flex-shrink-0 shadow-lg">
            <Image
              src={artist?.images[1].url as string}
              alt=""
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div>
            <h3 className="text-sm ">ARTIST</h3>
            <h1 className="font-bold sm:text-5xl md:text-7xl lg:text-8xl">
              {artist?.name}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 p-8">
        <h1 className="text-2xl">Popular</h1>
        {!artistTopTracks ? (
          <LoadingComponent />
        ) : (
          artistTopTracks?.map((track, index) => (
            <PopularSong
              key={track.id}
              image={track.album.images[2].url}
              name={track.name}
              index={index}
              duration_ms={track.duration_ms}
            />
          ))
        )}
      </div>
      <div className="flex flex-col p-8">
        <h1 className="mb-6 text-2xl">Popular Releases</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {!artistAlbums ? (
            <LoadingComponent />
          ) : (
            artistAlbums?.map((album, index) => (
              <SquareAlbumCard
                key={album.id}
                id={album.id}
                text={album.name}
                release_date={album.release_date}
                album_type={album.album_type}
                image={album.images[1].url}
                className={cl(
                  index > 0 && "hidden",
                  index === 1 && "sm:flex",
                  index === 2 && "md:flex",
                  index === 3 && "lg:flex",
                  index === 4 && "xl:flex",
                  index === 5 && "2xl:flex"
                )}
              />
            ))
          )}
        </div>
      </div>
      <div className="flex flex-col p-8">
        <div className="flex justify-between">
          <h1 className="mb-6 text-2xl">Fans also like</h1>
          <Link href={`/artists/${router.query.id}/related`}>
            <a className="text-sm uppercase tracking-wide text-[#484d52] hover:text-white">
              see all
            </a>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {!relatedArtists ? (
            <LoadingComponent />
          ) : (
            relatedArtists?.map((album, index) => (
              <FanAlsoLike
                key={album.id}
                id={album.id}
                name={album.name}
                image={album.images[1].url}
                className={cl(
                  index > 0 && "hidden",
                  index === 1 && "sm:flex",
                  index === 2 && "md:flex",
                  index === 3 && "lg:flex",
                  index === 4 && "xl:flex",
                  index === 5 && "2xl:flex"
                )}
              />
            ))
          )}
        </div>
      </div>
    </main>
  )
}

export default ArtistDetails

ArtistDetails.PageLayout = HomeLayout
