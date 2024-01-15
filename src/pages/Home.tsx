import { useTitle } from '@/shared/hooks/useTitle';
import {
  About,
  HomeHero,
  Numbers,
  Pictures,
  School,
  Courses,
  Alumni,
  Events,
  Speakers,
  Merch,
  Community,
  Contribute,
  Support,
} from '@/features/homeFeatures';
import { Principles } from '@/features/Principles';
import { Places } from '@/widgets';

export const HomePage = () => {
  useTitle("Home · The Rolling Scopes School");

  return (
    <>
      <HomeHero />
      <About />
      <Numbers />
      <Places/>
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
