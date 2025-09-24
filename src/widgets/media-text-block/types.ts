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
  backgroundColor?: 'bg-rs-primary' | 'bg-mentorship-primary' | 'bg-gray';
  embedded?: boolean;
};

export type ApiMediaTextBlockSettings = {
  imageAbsolutePosition?: boolean;
  width?: number;
};
