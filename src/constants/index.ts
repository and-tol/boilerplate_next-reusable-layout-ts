import type { ConfigType, MetaProps } from 'src/types';

export const config: Readonly<ConfigType> = Object.freeze({
  DOMAIN: 'https://some_page.com',
  BASE_URL: 'https://some_page.com',
  PROJECT_NAME: 'Project Name',
  SITE_TITLE: 'Site Title',
  SITE_DESCRIPTION: 'Site Description',
  SITE_KEYWORDS: ['project'],
  GOOGLE_FONTS: 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Lora:wght@400;500;600&family=Noto+Serif+Display:wght@100;200;300;400;500;600;700&display=swap',
  VICON: '/vercel.svg',
  TWITTER_ACCOUNT: "@myaccount",
  GITHUB_ACCOUNT: "github_account",
})
/*
export const DOMAIN: string = 'https://some_page.com';
export const BASE_URL: string = 'https://some_page.com';
export const PROJECT_NAME: string = 'Project Name';
export const SITE_TITLE: string = 'Site Title';
export const SITE_DESCRIPTION: string = 'Site Description';
export const SITE_KEYWORDS: string[] = ['project']
*/

export enum Site_Typing {
  PerPage = 'PerPage',
  SingleShared = 'SingleShared'
}

export const SITE_TYPE: Site_Typing = Site_Typing.SingleShared

export const META_DATA: Readonly<MetaProps> = {
  title: config.PROJECT_NAME,
  description: config.SITE_DESCRIPTION,
  keywords: config.SITE_KEYWORDS,
  icon: '',
  image: '',
  date: new Date(),
}




/*
  "site_keywords": [
    {
      "keyword": "Next.js"
    },
    {
      "keyword": "Netlify"
    },
    {
      "keyword": "React"
    }
  ]
*/
