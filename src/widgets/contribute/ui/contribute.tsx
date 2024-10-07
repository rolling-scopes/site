import image from '@/shared/assets/contribute.webp';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { OptionItem } from '@/widgets/option-item';

import './contribute.scss';

const contributeOptions = [
  {
    title: 'Mentorship',
    description:
      'Become a mentor and guide the next generation of developers. Sign up as a mentor here.',
    linkLabel: 'Register as a mentor',
    href: 'https://app.rs.school/registry/mentor',
  },
  {
    title: 'Developer / Coordinator / Trainer',
    description:
      'Contribute your skills as a developer, coordinator, or trainer. Fill out this form to get started.',
    linkLabel: 'Become a contributor',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdGKdEHK1CnZjgll9PpMU0xD1m0hm6xGoXc98H7woCDulyQkg/viewform',
  },
];

export const Contribute = () => (
  <div id="contribute" className="contribute container">
    <div className="contribute content">
      <div className="general">
        <div className="info">
          <WidgetTitle mods="asterisk">How to Contribute</WidgetTitle>
          <Paragraph fontSize="large">
            Contributing to The Rolling Scopes is not only a great way to give back to the
            community, but it&apos;s also an excellent way to enhance your own knowledge.
          </Paragraph>
          <Paragraph>
            Remember, teaching others is one of the best ways to learn - this is known as The
            Protégé Effect! There are several ways you can contribute, choose yours.
          </Paragraph>
        </div>
        <Image className="right picture" img={image} alt="contribute" />
      </div>
      <div className="contribute-options">
        {contributeOptions.map(({ title, description, linkLabel, href }) => (
          <OptionItem
            key={title}
            title={title}
            description={description}
            linkLabel={linkLabel}
            href={href}
          />
        ))}
      </div>
      <Paragraph className="contribute-paragraph">
        Additionally, we provide feedback on LinkedIn, which can be a valuable asset for your
        professional development.
      </Paragraph>
    </div>
  </div>
);
