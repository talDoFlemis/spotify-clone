import axios from "axios"
import useSWR from "swr"

const fetcher = (url: string) => axios.get(url).then((r) => r.data)

export const useQuery = (url: string) => {
  return useSWR(url, fetcher)
}
