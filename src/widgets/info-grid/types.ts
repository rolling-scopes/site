import { ReactNode } from 'react';

import { InfoCellTitleVariants } from '@/widgets/info-grid/ui/info-cell/info-cell';

export type InfoGridItem = {
  id?: string;
  title?: string;
  content?: ReactNode;
};

export type InfoGridData = {
  gridItems?: InfoGridItem[];
  size?: InfoCellTitleVariants['titleFontSize'];
};
