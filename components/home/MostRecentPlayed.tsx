import LoadingComponent from "@components/layouts/LoadingComponent"
import { useQuery } from "hooks/useQuery"
import { RecentlyPlayedData } from "typings"
import CardMostRecentPlayed from "./Cards/CardMostRecentPlayed"
import cl from "clsx"

function MostRecentPlayed() {
  const getUserTime = new Date().getHours()
  let customSaudation = ""
  if (getUserTime > 0 && getUserTime < 12) {
    customSaudation = "Morning"
  }

  if (getUserTime >= 12 && getUserTime < 18) {
    customSaudation = "Afternoon"
  }

  if (getUserTime >= 18 && getUserTime < 24) {
    customSaudation = "Evening"
  }

  const { data: recentlyPlayed, error } = useQuery<RecentlyPlayedData[]>(
    "/api/getRecentlyPlayed"
  )

  return (
    <div className="p-8 text-white">
      <h1 className="mb-8 text-3xl font-bold">Good {customSaudation}</h1>
      <div className="grid grid-cols-1 grid-rows-3 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        {!recentlyPlayed && !error ? (
          <LoadingComponent className="col-span-full row-span-full" />
        ) : (
          recentlyPlayed
            ?.slice(0, 6)
            .map((track, index) => (
              <CardMostRecentPlayed
                key={track.track.id}
                text={track.track.name}
                image={track.track.album.images[0].url}
                className={cl(index > 2 && "hidden sm:inline-flex")}
              />
            ))
        )}
      </div>
    </div>
  )
}

export default MostRecentPlayed
