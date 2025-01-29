import type { Trainer } from '@/entities/trainer';
import aSerhiyenia from '@/shared/assets/mentors/a-serhiyenia.webp';
import marharytaMalets from '@/shared/assets/mentors/m-malets.webp';
import nataliaLebedevaImg from '@/shared/assets/mentors/n-lebedeva.webp';

export const shortTrackTrainers: Trainer[] = [
  {
    name: 'Aleh Serhiyenia',
    role: 'Front-End Developer',
    bio: 'Aleh Serhiyenia works at EPAM Systems, developing web applications using Angular. He was always interested in technology and computers. Aleh received his higher education at BSUIR. For a long time, he engaged in production automation. Then he became interested in graphic design, the development of banners, logos, signs, etc. Aleh has always had a passion for programming. He passed RS School and then EPAM Lab. Now Aleh is ready to share his experience and expertise with RS School students.',
    photo: aSerhiyenia,
  },
  {
    name: 'Marharyta Malets',
    role: 'EPAM, Software Engineer',
    bio: 'Marharyta graduated from RS School in July 2021 and by March 2022, she became a mentor for the first time. Since then, RS School has become an essential part of her life. She is sure that she is growing and learning with her mentees. Her favorite activity is participating in technical interviews. However, she is always open to new experiences and learning opportunities.',
    photo: marharytaMalets,
  },
  {
    name: 'Natalia Lebedeva',
    role: 'EPAM, Junior Software Engineer',
    bio: 'Natalia trained at RS School, got into the spirit of the school and became its mentor and contributor. After passing through the EPAM lab, she realized her dream and became a developer. Loves spending time in the company of like-minded people and organizes RS School community meetings in Almaty. Wants to help others on their difficult path.',
    photo: nataliaLebedevaImg,
  },
];
