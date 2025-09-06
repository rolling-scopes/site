import { Suspense } from 'react';

import welcome from '@/shared/assets/welcome.webp';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Hero } from '@/widgets/hero';
import { MerchCatalog } from '@/widgets/merch-catalog';
import { Loader } from '@/widgets/merch-catalog/ui/loader/loader';

export const Merch = async () => {
  return (
    <>
      <Hero heading="Merch" subHeading="Free assets for your design" image={welcome} />
      <Breadcrumbs />
      <Suspense fallback={<Loader />}>
        <MerchCatalog />
      </Suspense>
    </>
  );
};
