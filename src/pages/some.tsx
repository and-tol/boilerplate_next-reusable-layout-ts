import type { ReactElement } from 'react';
import { Layout } from 'src/components';
import type { NextPageWithLayout } from './_app';

const SomePage: NextPageWithLayout = (): ReactElement=> {
    return <div>About content</div>;
};

SomePage.getLayout = (page: ReactElement) => (
    <Layout
        meta={ {
            title: 'Some | NextJs',
            description: 'Some Page',
        } }
    >
        { page }
    </Layout>
);

export default SomePage;
