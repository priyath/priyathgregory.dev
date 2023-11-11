import * as React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';
import { ColorModeContextProvider } from '../styles/ColorModeContext';
import { DefaultSeo } from 'next-seo';
import DefaultSeoConfig from '../next-seo.config';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageView } from '../lib/google-analytics';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={'/static/github-calendar.min.js'}
        strategy={'beforeInteractive'}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy={'afterInteractive'}
      />
      <Script id={'google-analytics-script'} strategy={'afterInteractive'}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <DefaultSeo {...DefaultSeoConfig} />
      <CacheProvider value={emotionCache}>
        <ColorModeContextProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </ColorModeContextProvider>
      </CacheProvider>
    </>
  );
}
