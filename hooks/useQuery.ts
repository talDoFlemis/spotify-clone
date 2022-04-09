/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import useSWR from "swr"

const fetcher = (url: string) => axios.get(url).then((r) => r.data)

export const useQuery = <T>(
  url: string,
  refreshInterval?: number,
  revalidateOnFocus?: boolean
) => {
  return useSWR<T>(url, fetcher, {
    refreshInterval: refreshInterval ?? 0,
    revalidateOnFocus: revalidateOnFocus ?? true,
  })
}
