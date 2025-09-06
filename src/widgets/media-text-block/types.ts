import { ReactNode } from 'react';

import { WidgetTitleVariants } from '@/shared/ui/widget-title/widget-title';

export type MediaTextBlockSectionData = ApiMediaTextBlockSettings & {
  anchorId?: string;
  title?: string;
  titleSize?: WidgetTitleVariants['size'];
  titleMod?: WidgetTitleVariants['mods'];
  sectionLabel?: string;
  contentLeft?: ReactNode | ReactNode[];
  contentRight?: ReactNode | ReactNode[];
  contentBottom?: ReactNode | ReactNode[];
  linkUrl?: string | null;
  linkLabel?: string;
  disabledLinkLabel?: string;
  backgroundColor?: string;
  embedded?: boolean;
};

export type ApiMediaTextBlockSettings = {
  imageAbsolutePosition?: boolean;
  width?: number;
};
