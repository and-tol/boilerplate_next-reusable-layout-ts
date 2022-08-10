import Head from 'next/head';
import type { ReactNode } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

interface Meta {
    title: string;
    description?: string;
    icon?: string;
}

type LayoutProps = {
    children: ReactNode;
    meta: Meta;
}

const Layout = ({ children, meta }: LayoutProps): ReactNode => {
    const { title, description, icon } = meta;

    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="description" content={ description } />
                <link rel="icon" href={ icon || '/favicon.ico' } />
            </Head>
            <main>
                <Header />
                <main>{ children }</main>
                <Footer />
            </main>
        </>
    );
};

export default Layout;
