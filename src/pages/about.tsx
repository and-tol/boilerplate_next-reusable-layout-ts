import type { ReactElement } from 'react';
import { Layout } from 'src/components';
import type { NextPageWithLayout } from './_app';

const AboutPage: NextPageWithLayout = (): ReactElement=> {
    return <div>About content</div>;
};

AboutPage.getLayout = (page: ReactElement) => (
    <Layout
        meta={ {
            title: 'Home | NextJs',
            description: 'About homepage',
        } }
    >
        { page }
    </Layout>
);

export default AboutPage;
