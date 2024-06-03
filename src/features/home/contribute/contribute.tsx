import { OptionItem, type OptionItemProps, Paragraph, Subtitle, Title } from '@/app/components';

import image from '@/assets/contribute.webp';
import Image from '@/features/image';

import './contribute.scss';

const contributeOptions: OptionItemProps[] = [
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
  <div className="contribute container">
    <div className="contribute content">
      <div className="general">
        <div className="info">
          <Title text="How to Contribute" hasAsterisk />
          <Subtitle text="Contributing to The Rolling Scopes is not only a great way to give back to the community, but it's also an excellent way to enhance your own knowledge." />
          <Paragraph>
            Remember, teaching others is one of the best ways to learn - this is known as The
            Protégé Effect! There are several ways you can contribute, choose yours.
          </Paragraph>
        </div>
        <Image className="right picture" src={image} alt="contribute" />
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
      <Paragraph>
        Additionally, we provide feedback on LinkedIn, which can be a valuable asset for your
        professional development.
      </Paragraph>
    </div>
  </div>
);
