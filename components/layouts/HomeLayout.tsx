import { useQuery } from "hooks/useQuery"
import Head from "next/head"
import React from "react"
import { PlayerStatus } from "typings"
import AdditionalInfo from "./AdditionalInfo"
import LoadingComponent from "./LoadingComponent"
import Player from "./Player"
import Sidebar from "./Sidebar"
import SongInfo from "./SongInfo"

function HomeLayout({ children }: { children: React.ReactNode }) {
  const { data: playerStatus } = useQuery<PlayerStatus>("/api/player")
  return (
    <div className="h-screen w-screen bg-spotifyBlack font-spotifyFont">
      <Head>
        {playerStatus?.item?.name ? (
          <title>
            {playerStatus.item.name} •{" "}
            {playerStatus.item.type === "track"
              ? playerStatus.item?.artists[0].name
              : playerStatus.item.show.name}{" "}
          </title>
        ) : (
          <title>Spotify</title>
        )}
      </Head>
      <div className="flex h-[88vh]">
        <Sidebar />
        <main className="flex w-full flex-col overflow-y-scroll">
          {children}
        </main>
      </div>
      {!playerStatus ? (
        <LoadingComponent />
      ) : (
        <div className="grid h-[12vh] select-none grid-cols-1 place-content-center bg-gradient-to-t from-neutral to-neutral px-4 text-white sm:grid-cols-3">
          <SongInfo songInfo={playerStatus?.item} />
          <Player playerStatus={playerStatus} />
          <AdditionalInfo device={playerStatus.device} />
        </div>
      )}
    </div>
  )
}

export default HomeLayout
