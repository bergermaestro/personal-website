import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

import * as ga from '../lib/google-analytics'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url:any) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return(
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} strategy='afterInteractive' />
      <Script id="google-analytics" strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
