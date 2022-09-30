/*
A Single Shared Layout in Next.js is a custom layout 
that's used by every page in our app. Let's say our app is simple, 
and every page has a navbar and a footer. 
We can define our layout like so:
*/

import type { FC, ReactElement } from 'react';
import Head from 'next/head';

import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { Meta } from 'src/components/layout';
import { META_DATA } from 'src/constants';

import type{ LayoutProps } from 'src/components/layout/Single-Shared-Layout/Layout.props';
import type { MetaProps } from 'src/types';

const Layout: FC<LayoutProps> = ({ children}): ReactElement => {
  return (
    <>
      <Head>
        <Meta meta={META_DATA as MetaProps} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
