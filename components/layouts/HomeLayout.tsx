import Sidebar from "@components/home/Sidebar"
import Head from "next/head"
import React from "react"

function HomeLayout({ children }: { children: React.ReactNode }) {
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
      <div className="flex h-[12vh] items-center justify-between bg-gradient-to-t from-[#205cc431] to-neutral px-4 text-white">
        <div>Song Info</div>
        <div>PLayer</div>
        <div>Additional control</div>
      </div>
    </div>
  )
}

export default HomeLayout
