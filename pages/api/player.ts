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
        const getPlayerStatus = await axios.get(
          "https://api.spotify.com/v1/me/player?additional_types=episode",
          {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        )
        const playerStatus = await getPlayerStatus.data

        if (playerStatus === "") {
          return res.status(200).json({
            item: {
              type: "disabled",
            },
          })
        }

        res.status(200).json(playerStatus)
      } catch (error) {
        res.status(400).json(error)
      }
      break
  }
}
