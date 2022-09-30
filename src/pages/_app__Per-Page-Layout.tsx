// Used Per-Page Layout
import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next/types';
import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';

type GetLayout = (page: ReactNode) => ReactNode;

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & { getLayout?: GetLayout };

// eslint-disable-next-line @typescript-eslint/ban-types
type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => page;

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? defaultGetLayout;

  return (
    <>
      <Head>
      <title> `Home`</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
      </Head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
