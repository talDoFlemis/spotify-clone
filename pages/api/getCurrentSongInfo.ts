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
        const getCurrentSongInfo = await axios.get(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        )

        const currentSongInfo = await getCurrentSongInfo.data
        if (currentSongInfo === "") {
          return res.status(204)
        }
        res.status(200).json(currentSongInfo)
      } catch (error) {
        res.status(400).json("Failed to fetch songInfo")
      }
      break
  }
}
