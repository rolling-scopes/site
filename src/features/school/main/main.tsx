import { Subtitle, Title, TitleType } from '@/app/components';

import './main.scss';

export const Main = () => {
  return (
    <main id="main" className="school-main container">
      <div className="school-main content">
        <div className="left">
          <div className="title-container">
            <Title text="RS School (Preview)" type={TitleType.ExtraBig} />
            <Subtitle text="This is test message for preview" />
          </div>
          <h2 className="description">Connecting people, growing together, having fun</h2>
        </div>
      </div>
    </main>
  );
};
