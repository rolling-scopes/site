import { MerchCatalog } from './merch-catalog/merch-catalog';
import NoMerch from './merch-catalog/no-merch/no-merch';
import { MerchProduct, merchStore } from '@/entities/merch';

export const MerchSection = async () => {
  const products: MerchProduct[] | [] = await merchStore.loadMerchCatalog();

  return (
    <section className="container">
      {(!products || products.length === 0) && <NoMerch />}

      {products?.length > 0 && (
        <div className="content">
          <MerchCatalog allProducts={products} />
        </div>
      )}
    </section>
  );
};
