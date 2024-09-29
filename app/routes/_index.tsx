import { LoaderFunction } from '@remix-run/node';
import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Home } from '@/pages/home';

export default function HomeRout() {
  return (
    <BaseLayout>
      <Home />
    </BaseLayout>
  );
}

export const loader: LoaderFunction = async () => {
  return {};
};
