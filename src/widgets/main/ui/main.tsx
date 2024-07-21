import { MainTitle } from '@/shared/ui/main-title';
import { Subtitle } from '@/shared/ui/subtitle';

import './main.scss';

export const Main = () => {
  return (
    <main id="main" className="school-main container">
      <div className="school-main content">
        <div className="left">
          <div className="title-container">
            <MainTitle>RS School</MainTitle>
            <Subtitle className="subtitle" color="black">
              Free courses. High motivation
            </Subtitle>
          </div>
          <h2 className="description">Connecting people, growing together, having fun</h2>
        </div>
      </div>
    </main>
  );
};
