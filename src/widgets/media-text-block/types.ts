import { ReactNode } from 'react';

export type MediaTextBlockSectionData = {
  title: string;
  contentLeft?: ReactNode;
  contentRight?: ReactNode;
  linkUrl?: string | null;
  linkLabel?: string;
  disabledLinkLabel?: string;
  backgroundColor?: string;
};
