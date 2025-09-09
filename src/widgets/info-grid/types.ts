import { ReactNode } from 'react';

import {
  InfoCellCardVariants,
  InfoCellTitleVariants,
} from '@/widgets/info-grid/ui/info-cell/info-cell';
import { InfoGridVariants } from '@/widgets/info-grid/ui/info-grid/info-grid';

export type InfoGridItem = {
  id?: string;
  title?: string;
  content?: ReactNode;
};

export type InfoGridData = {
  gridItems?: InfoGridItem[];
  size?: InfoCellCardVariants['size'];
  titleFontSize: InfoCellTitleVariants['titleFontSize'];
  borderColor: InfoGridVariants['borderColor'];
  withGap: boolean;
};
