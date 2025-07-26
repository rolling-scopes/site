import { ReactNode } from 'react';

import { WidgetTitleVariants } from '@/shared/ui/widget-title/widget-title';

export type MediaTextBlockSectionData = {
  title?: string;
  titleSize?: WidgetTitleVariants['size'];
  contentLeft?: ReactNode | ReactNode[];
  contentRight?: ReactNode | ReactNode[];
  contentBottom?: ReactNode | ReactNode[];
  linkUrl?: string | null;
  linkLabel?: string;
  disabledLinkLabel?: string;
  backgroundColor?: string;
  embedded?: boolean;
};
