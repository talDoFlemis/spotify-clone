import React from "react"
import { TopArtistsData } from "typings"
import CardTopArtists from "./Cards/CardTopArtists"
import cl from "clsx"

function TopArtists({ topArtists }: { topArtists: TopArtistsData[] }) {
  return (
    <div className=" p-8 text-white">
      <h1 className="mb-8 text-2xl font-bold">Your Top Artists</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {topArtists.map((artist, index) => (
          <CardTopArtists
            artistName={artist.name}
            artistGenres={artist.genres
              .slice(0, 3)
              .map((genre) => genre)
              .join(", ")}
            key={artist.id}
            image={artist.images[0].url}
            className={cl(
              index > 0 && "hidden",
              index === 1 && "sm:flex",
              index === 2 && "md:flex",
              index === 3 && "lg:flex",
              index === 4 && "xl:flex",
              index === 5 && "2xl:flex"
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default TopArtists
