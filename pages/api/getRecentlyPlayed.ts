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
        const getRecentlyPlayed = await axios.get(
          "https://api.spotify.com/v1/me/player/recently-played",
          {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        )

        const recentlyPlayed = await getRecentlyPlayed.data.items.slice(0, 6)

        res.status(200).json(recentlyPlayed)
      } catch (error) {
        res.status(400).json("Failed to fetch RecentlyPlayedData")
      }
      break
  }
}
