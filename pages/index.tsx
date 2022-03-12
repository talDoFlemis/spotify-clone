import MostRecentPlayed from "@components/home/MostRecentPlayed"
import Navbar from "@components/home/Navbar"
import TopArtists from "@components/home/TopArtists"
import TopTracks from "@components/home/TopTracks"
import YourShows from "@components/home/YourShows"
import HomeLayout from "@components/layouts/HomeLayout"
import { GetServerSideProps } from "next"
import { getSession, useSession } from "next-auth/react"

const Home = () => {
  const { data: session } = useSession()
  // console.log(session)
  return (
    <main className="flex w-full flex-col">
      <div className="w-full bg-gradient-to-b from-[#c25a7d98] to-spotifyBlack">
        <Navbar username={session?.user.username} />
        <MostRecentPlayed />
      </div>
      <YourShows />
      <TopTracks />
      <TopArtists />
    </main>
  )
}

export default Home

Home.PageLayout = HomeLayout

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  return {
    props: {
      session,
    },
  }
}
