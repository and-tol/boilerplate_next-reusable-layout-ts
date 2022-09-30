import Head from 'next/head';
import type { FC, ReactElement } from 'react';

type TwitterMetaPropsType = {
  twitterAccount?: string;
};

export const TwitterMeta: FC<TwitterMetaPropsType> = ({
  twitterAccount,
}): ReactElement => {
  return (
    <Head>
      {Boolean(twitterAccount) && (
        <>
          <meta content="summary_large_image" name="twitter:card" />
          <meta content={twitterAccount} name="twitter:site" />
          <meta content={twitterAccount} name="twitter:creator" />
        </>
      )}
    </Head>
  );
};
