import { useEffect } from "react"
import { signIn, useSession } from "next-auth/react"
// import spotifyApi from "@lib/spotify"
import SpotifyWebApi from "spotify-web-api-node"

export const useSpotify = () => {
  const { data: session } = useSession()
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string,
    // clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET as string,
  })

  useEffect(() => {
    if (session) {
      if (session.error === "RefreshAccessTokenError") {
        signIn()
      }

      spotifyApi.setAccessToken(session.user.accessToken)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  return spotifyApi
}

export default useSpotify
