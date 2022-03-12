import SpotifyWebApi from "spotify-web-api-node"
import { JWT } from "next-auth/jwt"

const scopes = [
  "user-read-email",
  "playlist-read-collaborative",
  "playlist-read-private",
  "streaming",
  "user-top-read",
  "user-library-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join(",")

const params = {
  scope: scopes,
}

const queryParamString = new URLSearchParams(params)

export const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" + queryParamString.toString()

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET as string,
})

export default spotifyApi

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

export const getTopTracks = async (token: JWT | null) => {
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token?.accessToken}`,
    },
  })
}
