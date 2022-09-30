// Used Per-Page Layout
// pages/index.tsx

import type { ReactElement } from 'react';

import { Layout } from 'src/components/layout/Per-Page-Layouts';
import { NestedLayout } from 'src/components/nested-layout';

const Page = () => {
  return (
    // Our page's content...
    <>
      <div></div>
    </>
  );
};

Page.getLayout = (page: ReactElement) => {
  return (
    <Layout meta={meta}>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Page;
