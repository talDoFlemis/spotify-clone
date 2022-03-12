import axios from "axios"
import { Session } from "next-auth"
import useSWR from "swr"

const fetcher = (url: string, session: Session) =>
  axios
    .get(url, {
      headers: {
        Authorization: "Bearer " + session?.user.accessToken,
      },
    })
    .then((r) => r.data.items)

export const useSpotify2 = (url: string, session: Session | null) => {
  console.log(session)
  return useSWR([url, session], fetcher)
}
