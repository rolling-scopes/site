import { PAGE_NAMES } from '@/shared/constants';
import { PaginationComponent } from '@/shared/ui/pagination/PaginationComponent';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroPage } from '@/widgets/hero-page';
import { MerchCatalog } from '@/widgets/merch-catalog';

export const Merch = async () => {
  return (
    <>
      <HeroPage pageName={PAGE_NAMES.MERCH} />
      <Breadcrumbs />
      <PaginationComponent />
      <MerchCatalog />
    </>
  );
};
