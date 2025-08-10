import { ReactNode } from 'react';

export type MediaGridSectionData = MediaGridSectionSettings & {
  title: string;
  description: ReactNode;
  media: ReactNode;
};

export type MediaGridSectionSettings = {
  removeItemsOnResponsive?: boolean;
  numberOfColumns?: number;
  rowGapPx?: number;
};

export type ApiMediaGridSectionSettings = {
  removeItemsOnResponsive?: boolean;
  numberOfColumns?: number;
  rowGapPx?: number;
};
