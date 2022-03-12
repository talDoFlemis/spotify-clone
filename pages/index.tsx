import MostRecentPlayed from "@components/home/MostRecentPlayed"
import Navbar from "@components/home/Navbar"
import Sidebar from "@components/home/Sidebar"
import TopArtists from "@components/home/TopArtists"
import TopTracks from "@components/home/TopTracks"
import YourShows from "@components/home/YourShows"
import spotifyApi from "@lib/spotify"
import { GetServerSideProps } from "next"
import { getSession, useSession } from "next-auth/react"
import Head from "next/head"
import {
  PlaylistData,
  RecentlyPlayedData,
  ShowsData,
  TopArtistsData,
  TopTracksData,
} from "typings"

interface Props {
  shows: ShowsData[]
  playlists: PlaylistData[]
  topTracks: TopTracksData[]
  topArtists: TopArtistsData[]
  recentlyPlayed: RecentlyPlayedData[]
}

const Home = ({
  playlists,
  shows,
  topTracks,
  topArtists,
  recentlyPlayed,
}: Props) => {
  const { data: session } = useSession()
  return (
    <div className="h-screen w-screen bg-spotifyBlack font-spotifyFont">
      <Head>
        <title>Spotify</title>
      </Head>
      <div className="flex h-[88vh]">
        <Sidebar playlists={playlists} />
        <main className="flex w-full flex-col overflow-y-scroll">
          <div className="w-full bg-gradient-to-b from-[#c25a7d98] to-spotifyBlack">
            <Navbar username={session?.user.username} />
            <MostRecentPlayed recentlyPlayed={recentlyPlayed} />
          </div>
          <YourShows shows={shows} />
          <TopTracks topTracks={topTracks} />
          <TopArtists topArtists={topArtists} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  spotifyApi.setAccessToken(session?.user.accessToken as string)
  spotifyApi.setRefreshToken(session?.user.refreshToken as string)

  const getPlaylists = await spotifyApi.getUserPlaylists()
  const playlists = getPlaylists.body.items

  const getShows = await spotifyApi.getMySavedShows()
  const shows = getShows.body.items

  const getTopTracks = await spotifyApi.getMyTopTracks({
    time_range: "short_term",
  })
  const topTracks = getTopTracks.body.items

  const getTopArtists = await spotifyApi.getMyTopArtists({
    time_range: "short_term",
  })
  const topArtists = getTopArtists.body.items

  const getRecentlyPlayed = await spotifyApi.getMyRecentlyPlayedTracks({
    limit: 10,
  })
  const recentlyPlayed = getRecentlyPlayed.body.items

  return {
    props: {
      recentlyPlayed,
      topArtists,
      topTracks,
      shows,
      playlists,
    },
  }
}
