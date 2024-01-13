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
  Support
} from '@/features/homeFeatures';
import { Principles } from '@/features/Principles';
import { FooterPartners } from '@/features/footerPartners';

export const HomePage = () => {
  useTitle("The Rolling Scopes School");

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
