import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';

import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';

interface Meta {
    title: string;
    description?: string;
    icon?: string;
}

type LayoutProps = {
    children: ReactNode;
    meta: Meta;
}

const Layout = ({ children, meta }: LayoutProps): ReactElement => {
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
