// Used Per-Page Layout

import type { ReactElement } from 'react';

import { Layout } from 'src/components/layout/Per-Page-Layouts';
import type { NextPageWithLayout } from 'src/pages/_app';
import { PROJECT_NAME } from 'src/constants';

const HomePage: NextPageWithLayout = (): ReactElement => {
  return <div>Home page content</div>;
};

HomePage.getLayout = (page) => (
  <Layout
    meta={{
      title: `Home`,
      description: `${PROJECT_NAME} architecture homepage`,
    }}
  >
    {page}
  </Layout>
);

export default HomePage;
