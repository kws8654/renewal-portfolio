import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { MapProvider } from 'react-map-gl';
import { SessionProvider, useSession } from 'next-auth/react';

const queryErrorHandler = () => {
  return <div>ERROR</div>;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: any;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            onError: queryErrorHandler,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
      </Head>
      <RecoilRoot>
        <MapProvider>
          <QueryClientProvider client={queryClient}>
            <SessionProvider session={session} refetchOnWindowFocus={false}>
              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </Hydrate>
              {/*<ReactQueryDevtools initialIsOpen={true} />*/}
            </SessionProvider>
          </QueryClientProvider>
        </MapProvider>
      </RecoilRoot>
    </>
  );
}