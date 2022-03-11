import MostRecentPlayed from "@components/home/MostRecentPlayed"
import Navbar from "@components/home/Navbar"
import Sidebar from "@components/home/Sidebar"
import YourShows from "@components/home/YourShows"
import Head from "next/head"

const Home = () => {
  return (
    <div className="h-screen w-screen bg-spotifyBlack font-spotifyFont">
      <Head>
        <title>Spotify</title>
      </Head>
      <div className="flex h-[88vh]">
        <Sidebar />
        <main className="flex  w-full flex-col overflow-y-scroll">
          <div className="w-full bg-gradient-to-b from-[#c25a7d98] to-spotifyBlack">
            <Navbar />
            <MostRecentPlayed />
          </div>
          <YourShows />
          <YourShows />
          <YourShows />
          <YourShows />
          <YourShows />
          <YourShows />
          <YourShows />
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

export default Home
