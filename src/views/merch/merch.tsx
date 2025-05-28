import { PAGE_NAMES } from '@/shared/constants';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroPage } from '@/widgets/hero-page';
import { MerchCatalog } from '@/widgets/merch-catalog';

export const Merch = async () => {
  return (
    <main>
      <HeroPage pageName={PAGE_NAMES.MERCH} />
      <Breadcrumbs />
      <MerchCatalog />
    </main>
  );
};
