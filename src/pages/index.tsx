import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
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
