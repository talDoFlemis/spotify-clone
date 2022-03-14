import React from "react"
import { TopTracksData } from "typings"
import CardTopTracks from "./Cards/CardTopTracks"
import cl from "clsx"
import { useQuery } from "hooks/useQuery"
import LoadingComponent from "@components/layouts/LoadingComponent"

function TopTracks() {
  const { data: topTracks, error } =
    useQuery<TopTracksData[]>("/api/getTopTracks")

  return (
    <div className=" p-8 text-white">
      <h1 className="mb-8 text-2xl font-bold">Your Top Tracks</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {!topTracks && !error ? (
          <LoadingComponent className="col-span-full" />
        ) : (
          topTracks?.map((track, index) => (
            <CardTopTracks
              trackName={track.name}
              key={track.id}
              artists={track.artists
                .slice(0, 3)
                .map((artist) => artist.name)
                .join(", ")}
              image={track.album.images[0].url}
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
  )
}

export default TopTracks
