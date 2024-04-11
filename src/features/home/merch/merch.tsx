import { Title, Subtitle, Paragraph, Button, SectionLabel } from '@/app/components';

import image from '@/assets/merch.webp';

import './merch.scss';

export const Merch = () => (
  <div id="merch" className="merch container">
    <div className="merch content column-2">
      <div className="info">
        <SectionLabel label="merch" />
        <Title text="RS merch" hasAsterisk />
        <Subtitle text="Are you an RS sloth fan and looking for RS merch?" />
        <Paragraph>
          The wait is almost over as we're gearing up for the catalog of free web and print assets
          where you will find all merch collections and can print your own Rolling Scopes t-shirts,
          stickers etc.
        </Paragraph>
        <Button label="Discover merch assets " href="https://sloths.rs.school/" />
      </div>
      <img className="right picture" src={image} alt="speakers-wanted" />
    </div>
  </div>
);
