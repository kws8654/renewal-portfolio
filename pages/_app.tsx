import '../styles/globals.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
config.autoAddCss = false;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: any;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
        <title>Wonsub Kim_Portfolio</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
