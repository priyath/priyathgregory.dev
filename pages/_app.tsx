import * as React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';
import { ColorModeContextProvider } from '../styles/ColorModeContext';
import { DefaultSeo } from 'next-seo';
import DefaultSeoConfig from '../next-seo.config';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <DefaultSeo {...DefaultSeoConfig} />
      <CacheProvider value={emotionCache}>
        <ColorModeContextProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ColorModeContextProvider>
      </CacheProvider>
    </>
  );
}
