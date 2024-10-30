import chatIcon from '@/shared/assets/icons/chat-icon.webp';
import giftIcon from '@/shared/assets/icons/gift.webp';
import paperIcon from '@/shared/assets/icons/paper-icon.webp';
import personIcon from '@/shared/assets/icons/person-icon.webp';
import planetIcon from '@/shared/assets/icons/planet.webp';
import { BenefitsProps } from '@/widgets/benefits/ui/benefits';
import { ImageLink } from 'data';

export type Benefit = {
  id: number;
  text: string;
  icon?: ImageLink;
};

const mentorshipHeader = 'Mentorship is for you if you';

export const benefitMentorshipHome: BenefitsProps = {
  header: mentorshipHeader,
  benefits: [
    {
      id: 1,
      text: 'Feel the desire to share your experience and knowledge',
    },
    {
      id: 2,
      text: 'Feeling a lack of communication',
    },
    {
      id: 3,
      text: 'You would like to upgrade your soft & hard skills',
    },
    {
      id: 4,
      text: 'Do you want to train acquaintances / friends / colleagues, but you do not have a ready curriculum or you studied at The Rollings Scopes School, and it\'s time for "Teach It Forward"',
    },
    {
      id: 5,
      text: 'Looking for beginner developers to join your company or project',
    },
  ],
  flex: false,
};

export const benefitMentorshipMentors: BenefitsProps = {
  header: mentorshipHeader,
  benefits: [
    {
      id: 1,
      text: 'Opportunity to develop a new colleague',
      icon: {
        href: planetIcon,
        alt: '',
      },
    },
    {
      id: 2,
      text: 'Gaining new experience, search for new colleagues',
      icon: {
        href: personIcon,
        alt: '',
      },
    },
    {
      id: 3,
      text: 'Opportunity to share knowledge',
      icon: {
        href: paperIcon,
        alt: '',
      },
    },
    {
      id: 4,
      text: 'You have completed the school course, feel confident and now it\'s your time to “Teach It Forward”',
    },
    {
      id: 5,
      text: 'Teaching others, you learn yourself',
    },
    {
      id: 6,
      text: 'Opportunity to improve tasks or create your own',
      icon: {
        href: giftIcon,
        alt: '',
      },
    },
    {
      id: 7,
      text: 'You\'re on the lookout for a great community that will always help you learn and grow',
      icon: {
        href: chatIcon,
        alt: '',
      },
    },
  ],
  flex: true,
};
