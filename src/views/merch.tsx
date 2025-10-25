import { Suspense } from 'react';

import { MerchProduct, merchStore } from '@/entities/merch';
import welcome from '@/shared/assets/welcome.webp';
import { Loader } from '@/shared/ui/loader/loader';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Hero } from '@/widgets/hero';
import { MerchCatalog, NoMerch } from '@/widgets/merch-catalog/index';

export const Merch = async () => {
  const products: MerchProduct[] | [] = await merchStore.loadMerchCatalog();

  return (
    <>
      <Hero heading="Merch" subHeading="Free assets for your design" image={welcome} />
      <Breadcrumbs />
      <Suspense fallback={<Loader />}>
        <section className="container">
          {products?.length ? <MerchCatalog products={products} /> : <NoMerch />}
        </section>
      </Suspense>
    </>
  );
};
