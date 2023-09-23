import React from 'react';
import image from '../../assets/map.png';

import './RSNumbers.scss';

interface InfoCellProps {
  title: string;
  description: string;
}

const InfoCell: React.FC<InfoCellProps> = ({ title, description }) => (
  <div className="info-container">
    <div>{title}</div>
    <div>{description}</div>
  </div>
);

const InfoCellDivider: React.FC = () => (
  <svg width="3" height="182" viewBox="-1 -1 3 182" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.5" y1="180" x2="0.499984" y2="4.37255e-08" stroke="#E2E2E2"></line>
  </svg>
);

export const RSNumbers: React.FC = () => {
  return (
    <div className="numbers">
      <div className="text-container">
        <div />
        <div>
          <div className="title">The Rolling Scopes in numbers</div>
          <div className="subtitle">
            Everyone can discover our community, regardless of age, professional employment, or
            place of residence.
          </div>
          <div className="description">
            Developers from different companies and countries are connected to pass on your
            knowledge, enrich your network and just have fun.
          </div>
        </div>
      </div>
      <div className="info">
        <InfoCell title="62k+" description="members" />
        <InfoCellDivider />
        <InfoCell title="500+" description="events" />
        <InfoCellDivider />
        <InfoCell title="600+" description="videos on YouTube" />
        <InfoCellDivider />
        <InfoCell title="1800+" description="RS School alumni per year" />
      </div>
      <img className="map" src={image} alt="map" />
    </div>
  );
};
