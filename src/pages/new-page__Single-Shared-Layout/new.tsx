import type { NextPage } from 'next/types';
import type { ReactElement } from 'react';
import Layout from 'src/components/layout/Per-Page-Layouts';
import { PROJECT_NAME } from 'src/constants';

const NewPage: NextPage = () => (
  <Layout
    meta={{
      title: `Cfgt | ${PROJECT_NAME}`,
      description: `${PROJECT_NAME} Layout architecture page`,
    }}
  >
    {}
  </Layout>
);

export default NewPage;
