import { StaticImageData } from 'next/image';

export type SocialLinkData = {
  link: string;
  label: string;
  icon?: StaticImageData;
};
