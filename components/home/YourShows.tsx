import React from "react"
import { ShowsData } from "typings"
import CardYourShows from "./Cards/CardYourShows"
import cl from "clsx"
import { useQuery } from "hooks/useQuery"
import LoadingComponent from "@components/layouts/LoadingComponent"

function YourShows() {
  const { data: shows, error } = useQuery<ShowsData[]>(
    "/api/getShows",
    undefined,
    false
  )

  return (
    <div className="p-8 text-white ">
      <h1 className="mb-8 text-2xl font-bold">Your Shows</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {!shows && !error ? (
          <LoadingComponent className="col-span-full" />
        ) : (
          shows?.map((show, index) => (
            <CardYourShows
              id={show.show.id}
              text={show.show.name}
              key={show.show.id}
              publisher={show.show.publisher}
              image={show.show.images[0].url}
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

export default YourShows
