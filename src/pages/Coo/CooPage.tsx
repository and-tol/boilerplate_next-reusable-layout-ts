import type { ReactElement } from 'react';
import Layout from 'src/components/layout/Per-Page-Layouts';
import type { NextPageWithLayout } from 'src/pages/_app';
import { PROJECT_NAME } from 'src/constants';

const CooPage: NextPageWithLayout = (): ReactElement => {
  return <div>`${PROJECT_NAME}` page content</div>;
};

CooPage.getLayout = (page) => (
  <Layout
    meta={{
      title: `Coo | ${PROJECT_NAME}`,
      description: `${PROJECT_NAME} Layout architecture page`,
    }}
  >
    {page}
  </Layout>
);

export default CooPage;
