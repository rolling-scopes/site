import { Subtitle } from '@/shared/ui/subtitle';

import './hero.scss';

export const Hero = () => {
  return (
    <main id="main" className="main container">
      <div className="main content">
        <div className="title-container">
          <div className="subtitle-container">
            <Subtitle fontSize="extra-small" color="black">
              an international community of developers
            </Subtitle>
            <Subtitle fontSize="extra-small" color="black">
              since 2013
            </Subtitle>
          </div>

          <h1 className="title-main">The Rolling Scopes</h1>
        </div>
        <h2 className="description-title">Connecting people, growing together, having fun</h2>
      </div>
    </main>
  );
};
