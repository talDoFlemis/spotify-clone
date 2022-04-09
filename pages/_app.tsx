import "../styles/globals.css"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import NextNProgress from "nextjs-progressbar"
import { SWRConfig } from "swr"
import axios from "axios"

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType
  }
}

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <SessionProvider session={pageProps.session}>
      <SWRConfig
        value={{ fetcher: (url: string) => axios.get(url).then((r) => r.data) }}
      >
        {Component.PageLayout ? (
          <Component.PageLayout>
            <NextNProgress color="#1db954" />
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <>
            <NextNProgress color="#1db954" />
            <Component {...pageProps} />
          </>
        )}
      </SWRConfig>
    </SessionProvider>
  )
}

export default MyApp
