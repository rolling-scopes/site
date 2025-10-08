import { Suspense } from 'react';

import welcome from '@/shared/assets/welcome.webp';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Hero } from '@/widgets/hero';
import { MerchSection } from '@/widgets/merch-section';
import { Loader } from '@/widgets/merch-section/ui/loader/loader';

export const Merch = async () => {
  return (
    <>
      <Hero heading="Merch" subHeading="Free assets for your design" image={welcome} />
      <Breadcrumbs />
      <Suspense fallback={<Loader />}>
        <MerchSection />
      </Suspense>
    </>
  );
};
