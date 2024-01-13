import { useTitle } from '@/shared/hooks/useTitle';
import {
  About,
  HomeHero,
  Numbers,
  Pictures,
  School,
  Courses,
  Principles,
  Alumni,
  Events,
  Speakers,
  Merch,
  Community,
  Contribute,
  Support
} from '@/features/homeFeatures';
import { FooterPartners } from '@/features/footerPartners';

export const Home = () => {
  useTitle('Home');

  return (
    <>
      <HomeHero />
      <About />
      <Numbers />
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
      <FooterPartners />
    </>
  );
};
