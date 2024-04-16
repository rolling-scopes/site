import { Button, Subtitle, Title, TitleType } from '@/app/components';

import image from '@/assets/support.webp';

import './support.scss';

export const Support = () => (
  <div className="support container">
    <div className="support content">
      <div className="info">
        <Title text="Support Us" type={TitleType.Big} hasAsterisk={false} hasLines={true} />
        <Subtitle text="Your donations help us cover hosting, domains, licenses, and advertising for courses and events. Every donation, big or small, helps!" />
        <Subtitle text="Thank you for your support!" />
        <Button label="Donate now " href="https://opencollective.com/rsschool" />
      </div>
      <img className="right picture" src={image} alt="support-us" />
    </div>
  </div>
);
