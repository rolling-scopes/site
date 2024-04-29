import { FC } from 'react';
import { Places } from '@/app/components';
import { useTitle } from '@/app/hooks/use-title/use-title';
import { config } from '@/config';
import {
  About,
  Alumni,
  Community,
  Contribute,
  Courses,
  Events,
  Hero,
  Merch,
  Numbers,
  Pictures,
  School,
  Speakers,
  Support,
} from '@/features/home';
import { Principles } from '@/features/principles';

export const Component: FC = () => {
  useTitle(`Home · ${config.title}`);

  return (
    <>
      <Hero />
      <About />
      <Numbers />
      <Places />
      <Pictures />
      <School />
      <Principles />
      <Courses />
      <Alumni />
      <Events />
      <Speakers />
      <Merch />
      <Community />
      <Contribute />
      <Support />
    </>
  );
};

Component.displayName = 'Home';
