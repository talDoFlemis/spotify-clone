import { RecentlyPlayedData } from "typings"
import CardMostRecentPlayed from "./Cards/CardMostRecentPlayed"

function MostRecentPlayed({
  recentlyPlayed,
}: {
  recentlyPlayed: RecentlyPlayedData[]
}) {
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

  return (
    <div className="p-8 text-white">
      <h1 className="mb-8 text-3xl font-bold">Good {customSaudation}</h1>
      <div className="grid grid-cols-2 grid-rows-3 gap-6 lg:grid-cols-3 lg:grid-rows-2">
        {recentlyPlayed.slice(0, 6).map((track) => (
          <CardMostRecentPlayed
            key={track.track.id}
            text={track.track.name}
            image={track.track.album.images[0].url}
          />
        ))}
      </div>
    </div>
  )
}

export default MostRecentPlayed
