import { MerchItem } from './ui/merch-item/merch-item';
import { getMerchData } from '@/entities/merch/api/merch-api';
import { PAGE_NAMES } from '@/shared/constants';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroPage } from '@/widgets/hero-page';

export const Merch = async () => {
  const products = await getMerchData();

  return (
    <>
      <HeroPage pageName={PAGE_NAMES.MERCH} />
      <Breadcrumbs />
      <p>Merch</p>
      {products.map((product) => (
        <MerchItem key={product.id} {...product} />
      ))}
    </>
  );
};
