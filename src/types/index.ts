import { ReactNode } from 'react';

export type MetaProps = {
  title: string;
  description?: string;
  keywords?: string[];
  icon?: string;
  image?: string;
  date?: Date;
}

export type LayoutProps = {
  children?: ReactNode;
  readonly meta: MetaProps;
};

export type ConfigType = {
  DOMAIN: string;
  BASE_URL?: string;
  PROJECT_NAME: string;
  SITE_TITLE: string;
  SITE_DESCRIPTION: string;
  SITE_KEYWORDS: string[];
  GOOGLE_FONTS?: string;
  FAVICON?: string;
  TWITTER_ACCOUNT?: string;
  GITHUB_ACCOUNT?: string;
}
