// Used Sigle Shared Layout
// pages/_app.tsx

import type { AppProps } from 'next/app';

import { Layout } from 'src/components/layout/Single-Shared-Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
