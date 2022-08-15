import type { ReactElement } from 'react';
import Layout from 'src/components/Layout';
import type { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = (): ReactElement=> {
    return <div>Homepage content</div>;
};

HomePage.getLayout = (page: ReactElement) => (
    <Layout
        meta={{
            title: 'Home | NextJs',
            description: 'NextJs Layout architecture homepage',
        }}
    >
        {page}
    </Layout>
);

export default HomePage;
