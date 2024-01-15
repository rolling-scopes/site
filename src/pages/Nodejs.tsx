import { About, Audience, Required, Trainer } from '@/features/nodejsFeatures';
import { CourseMain } from '@/features/CourseMain/CourseMain';
import { FooterPartners } from '@/features/footerPartners';
import { useTitle } from '@/shared/hooks';

export const NodejsPage = () => {
  useTitle('Node.js Course · The Rolling Scopes School');

  return (
    <>
      <CourseMain />
      <Audience />
      <About />
      <Required />
      <Trainer />
      <FooterPartners />
    </>
  );
};
