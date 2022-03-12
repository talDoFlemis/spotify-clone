import "../styles/globals.css"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import NextNProgress from "nextjs-progressbar"

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType
  }
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: ComponentWithPageLayout) {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  )
}

export default MyApp
