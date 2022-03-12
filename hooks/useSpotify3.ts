/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { Session } from "next-auth"
import useSWR from "swr"

const fetcher = (url: string, session?: Session | null) =>
  axios
    .get(url, {
      headers: {
        Autentication: "Bearer " + session?.user.accessToken,
      },
    })
    .then((r) => r.data)

export const useSpotify3 = <T>(url: string, session?: Session | null) => {
  return useSWR<T>([url, session], fetcher)
}
