import { PrincipleCard } from './principle-card';
import { cards } from '../../constants';
import { WidgetTitle } from '@/shared/ui/widget-title/widget-title';

import './principles.scss';

export const Principles = () => (
  <div className="principles container">
    <div className="principles content">
      <WidgetTitle size="large" mods="lines">RS School Principles are an ability to complete our mission</WidgetTitle>
      <div className="cards column-3 ">
        {cards.map(({ title, description, icon }) => (
          <PrincipleCard key={title} description={description} icon={icon} title={title} />
        ))}
      </div>
    </div>
  </div>
);
