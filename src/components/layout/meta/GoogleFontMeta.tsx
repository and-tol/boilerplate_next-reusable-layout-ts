import Head from 'next/head';
import type { FC, ReactElement } from 'react';

type GoogleFontMetaPropsType = {
  googleFont?: string;
};

export const GoogleFontMeta: FC<GoogleFontMetaPropsType> = ({
  googleFont,
}): ReactElement => {
  return (
    <Head>
      {Boolean(googleFont) && (
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link href={googleFont} rel="stylesheet" />
        </>
      )}
    </Head>
  );
};

// export default MetaFont;
