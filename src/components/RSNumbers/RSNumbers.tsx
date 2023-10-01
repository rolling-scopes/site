import React from 'react';
import image from '../../assets/map.png';
import { Paragraph } from '../Paragraph/Paragraph';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';

import './RSNumbers.scss';

interface InfoCellProps {
  title: string;
  description: string;
}

const InfoCell: React.FC<InfoCellProps> = ({ title, description }) => (
  <div className="info-cell">
    <div className="number">{title}</div>
    <div className="text">{description}</div>
  </div>
);

const InfoCellDivider: React.FC = () => <div className="info-divider" />;

export const RSNumbers: React.FC = () => {
  return (
    <div className="numbers container">
      <div className="numbers content">
        <div className="text-container">
          <div>
            <Title text="The Rolling Scopes in numbers" asterix />
            <Subtitle
              text="Everyone can discover our community, regardless of age, professional employment, or
            place of residence."
            />
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
        <img className="map" src={image} alt="map" />
      </div>
    </div>
  );
};
