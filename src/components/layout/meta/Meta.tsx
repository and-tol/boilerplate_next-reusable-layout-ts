import { useRouter } from 'next/router';
import type { FC } from 'react';

import {
  config,
  DOMAIN,
  FAVICON, GOOGLE_FONTS, PROJECT_NAME,
  TWITTER_ACCOUNT
} from 'src/constants';
import { dateTime } from 'src/helpers/dateTime';

import { MetaGoogleFont } from 'src/components/layout/meta/GoogleFontMeta';
import { TwitterMeta } from 'src/components/layout/meta/TwitterMeta';
import type { MetaProps } from 'src/types';

export const Meta: FC<{ meta: MetaProps }> = ({ meta }) => {
  const { title, description, keywords, icon, image = '', date } = meta;
  const router = useRouter();

  console.log('meta router', router);

  //   const formattedTitle = titleStyle(title);
  const url = router && router.asPath ? router.asPath : undefined;
  const canonicalUrl = url && url === '/' ? DOMAIN : DOMAIN + url;
  // const canonicalUrl = (`${DOMAIN}` + (router.asPath === '/' ? '' : router.asPath)).split('?')[0];
  const featuredImage = DOMAIN + image;
  console.log(featuredImage);

  return (
    <>
      <meta charSet="utf-8" key="charset" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="follow, index" name="robots" />
      <meta content="#ffffff" name="theme-color" />
      <meta content="#ffffff" name="msapplication-TileColor" />

      <title>{`${PROJECT_NAME} | ${title}`}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta content={keywords} name="keywords" />}
      <link rel="icon" href={icon || '/favicon.ico'} />

      {url && <link href={canonicalUrl} rel="canonical" />}
      <meta content="en_US" property="og:locale" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={canonicalUrl} property="og:url" />
      {/* <meta content="5e41b2275db646a5" name="yandex-verification" /> */}
      {/* <meta content="t28Kl2fGmZjIEgh6q3mGsf-7gGb8115VMQm1qbMMIKc" name="google-site-verification" /> */}
      {/* og format */}
      {featuredImage && (
        <>
          <meta content={featuredImage} property="og:image" />
          <meta content={description} property="og:image:alt" />
        </>
      )}
      {date && (
        <>
          <meta content="article" property="og:type" />
          <meta content={dateTime(date)} property="article:published_time" />
        </>
      )}

      <TwitterMeta twitterAccount={TWITTER_ACCOUNT} />

      <MetaGoogleFont googleFont={GOOGLE_FONTS} />

      <link rel="icon" href={FAVICON} />
    </>
  );
};
