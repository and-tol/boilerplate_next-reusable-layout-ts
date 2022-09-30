import type { ReactElement } from 'react';
import Layout from 'src/components/layout/Per-Page-Layouts';
import type { NextPageWithLayout } from 'src/pages/_app';
import { PROJECT_NAME } from 'src/constants';

const TemplateNamePage: NextPageWithLayout = (): ReactElement => {
  return <div>`${PROJECT_NAME}` page content</div>;
};

TemplateNamePage.getLayout = (page) => (
  <Layout
    meta={{
      title: `TemplateName | ${PROJECT_NAME}`,
      description: `${PROJECT_NAME} Layout architecture page`,
    }}
  >
    {page}
  </Layout>
);

export default TemplateNamePage;
