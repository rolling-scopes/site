import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Home } from '@/pages/home';

export const handle = { static: true };

export default function HomeRout() {
  return (
    <BaseLayout>
      <Home />
    </BaseLayout>
  );
}
