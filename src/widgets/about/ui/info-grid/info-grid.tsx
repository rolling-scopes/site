import { ReactNode } from 'react';
import { Image } from '@/shared/ui/image';
import { ImageType } from '@/shared/ui/image/image';

import './info-grid.scss';

interface InfoGridProps {
  items: {
    id: number;
    title: string;
    info: string | ReactNode;
    icon: ImageType;
  }[];
  hasTitle?: boolean;
}
// removed hasTitle props temp
export const InfoGrid = ({ items }: InfoGridProps) => {
  return (
    <div className="about-grid">
      {items.map(({ id, title, info, icon }) => (
        <div key={id} className="item" data-testid="info-grid-item">
          <div className="item-title">
            <Image img={icon} alt={title} />
            <h2>{title}</h2>
          </div>
          {typeof info === 'string' ? <p>{info}</p> : info}
        </div>
      ))}
    </div>
  );
};
