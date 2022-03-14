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
  const { data: playerStatus, error } = useQuery<PlayerStatus>("/api/player")

  return (
    <div className="h-screen w-screen bg-spotifyBlack font-spotifyFont">
      <Head>
        <title>Spotify</title>
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
        <div className="grid h-[12vh] select-none grid-cols-3 place-content-center bg-gradient-to-t from-neutral to-neutral px-4 text-white">
          <SongInfo songInfo={playerStatus?.item} />
          <Player playerStatus={playerStatus} />
          <AdditionalInfo />
        </div>
      )}
    </div>
  )
}

export default HomeLayout
