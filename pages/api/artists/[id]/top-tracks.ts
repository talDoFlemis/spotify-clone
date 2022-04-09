import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  })
  const accessToken = token?.accessToken as string

  const { method } = req

  switch (method) {
    case "GET":
      try {
        const getTopArtistTracks = await axios.get(
          `https://api.spotify.com/v1/artists/${req.query.id}/top-tracks?market=BR`,
          {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        )

        const topArtistTracks = await getTopArtistTracks.data.tracks

        res.status(200).json(topArtistTracks)
      } catch (error) {
        console.log(error)
        res.status(400).json("Failed to fetch playlists")
      }
      break
  }
}
