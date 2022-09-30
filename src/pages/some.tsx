import type { ReactElement } from 'react';
import { Layout } from 'src/components';
import type { NextPageWithLayout } from './_app';

const SomePage: NextPageWithLayout = (): ReactElement=> {
    return <div>Some page content</div>;
};

SomePage.getLayout = (page) => (
    <Layout
        meta={ {
            title: 'Some',
            description: 'Some Page',
        } }
    >
        { page }
    </Layout>
);

export default SomePage;
