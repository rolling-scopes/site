import Image from '@/features/image';

import './info-grid.scss';

interface InfoGridProps {
  items: {
    id: number;
    title: string;
    info: string;
    icon: string;
  }[];
  hasTitle?: boolean;
}
// removed hasTitle props temp
export const InfoGrid = ({ items }: InfoGridProps) => {
  return (
    <div className="about-grid">
      {items.map(({
        id, title, info, icon,
      }) => (
        <div key={id} className="item" data-testid="info-grid-item">
          <div className="item-title">
            <Image src={icon} alt={title} />
            <h2>{title}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: info }} />
        </div>
      ))}
    </div>
  );
};
