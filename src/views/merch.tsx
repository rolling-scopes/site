import { Suspense } from 'react';

import welcome from '@/shared/assets/welcome.webp';
import { Loader } from '@/shared/ui/loader/loader';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Hero } from '@/widgets/hero';
import { MerchSection } from '@/widgets/merch-section';

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
