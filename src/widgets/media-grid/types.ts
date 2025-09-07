import { CSSProperties, PropsWithChildren, ReactNode } from 'react';

export type MediaGridSectionData = MediaGridSectionSettings & PropsWithChildren;

export type ApiMediaGridSectionData = ApiMediaGridSectionSettings & {
  media: ReactNode;
};

export type MediaGridSectionSettings = {
  removeItemsOnResponsive?: boolean;
  numberOfColumns?: number;
  rowGapPx?: number;
  colGapPx?: number;
  fitContent?: boolean;
  settings?: CSSProperties;
};

export type ApiMediaGridSectionSettings = {
  removeItemsOnResponsive?: boolean;
  numberOfColumns?: number;
  rowGapPx?: number;
  colGapPx?: number;
  fitContent?: boolean;
  settings?: CSSProperties;
};
