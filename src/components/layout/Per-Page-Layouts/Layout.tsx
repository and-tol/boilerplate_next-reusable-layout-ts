// src/pages/_app.tsx
/*
If we want to have multiple layouts 
(ex. authentication, dashboard, settings etc...), 
we can define a getLayout property to our pages 
that will receive the page in props, 
and wrap it in the layout that we want. 
Since we're returning a function, we can have complex nested layouts 
if we wanted to.
Here's an example of a page:
*/

import Head from 'next/head';
import type { ReactElement } from 'react';

import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';

import { LayoutProps } from './Layout.props';
import { Meta } from '../Meta';

const Layout = ({ children, meta }: LayoutProps): ReactElement => {
  return (
    <>
      <Head>
        <Meta meta={meta} />
      </Head>
      <main>
        <Header />
        <main>{children}</main>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
