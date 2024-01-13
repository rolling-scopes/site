import { About, Audience, Main, Required, Trainer } from '@/features/nodejsFeatures';
import { FooterPartners } from '@/features/footerPartners';
import { useTitle } from '@/shared/hooks';

export const NodejsPage = () => {
  useTitle('Node.js Course · The Rolling Scopes School');

  return (
    <>
      <Main />
      <Audience />
      <About />
      <Required />
      <Trainer />
      <FooterPartners />
    </>
  );
};
