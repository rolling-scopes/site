import { useTitle } from '@/app/hooks/useTitle/useTitle';
import {
  About,
  Hero,
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
} from '@/features/home';
import { Principles } from '@/features/principles';
import { Places } from '@/app/components';

export const Home = () => {
  useTitle('Home · The Rolling Scopes School');

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
