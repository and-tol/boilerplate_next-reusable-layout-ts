import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';

const AboutPage: NextPageWithLayout = () => {
    return <div>About content</div>;
};

AboutPage.getLayout = (page: ReactElement) => (
    <Layout
        meta={{
            title: 'Home | NextJs',
            description: 'About homepage',
        }}
    >
        {page}
    </Layout>
);

export default AboutPage;
