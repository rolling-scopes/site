import image from '@/shared/assets/map.webp';
import Image from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './numbers.scss';

interface InfoCellProps {
  title: string;
  description: string;
}

const InfoCell = ({ title, description }: InfoCellProps) => (
  <div className="info-cell">
    <div className="number">{title}</div>
    <div className="text">{description}</div>
  </div>
);

const InfoCellDivider = () => <div className="info-divider" />;

export const Numbers = () => {
  return (
    <div className="numbers container">
      <div className="numbers content">
        <div className="text-container">
          <div>
            <WidgetTitle marginSize="medium" size="medium" mods="asterisk">
              The Rolling Scopes in numbers
            </WidgetTitle>
            <Subtitle marginSize="medium">
              Everyone can discover our community, regardless of age, professional employment, or
              place of residence.
            </Subtitle>
            <Paragraph>
              Developers from different companies and countries are connected to pass on your
              knowledge, enrich your network and just have fun.
            </Paragraph>
          </div>
        </div>
        <div className="info">
          <div className="left">
            <InfoCell title="62k+" description="members" />
            <InfoCellDivider />
            <InfoCell title="500+" description="events" />
            <InfoCellDivider />
          </div>
          <div className="right">
            <InfoCell title="600+" description="videos on YouTube" />
            <InfoCellDivider />
            <InfoCell title="1800+" description="RS School alumni per year" />
          </div>
        </div>
        <Image className="map" src={image} alt="map" />
      </div>
    </div>
  );
};
