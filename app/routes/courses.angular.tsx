import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Angular } from '@/pages/angular';

export const handle = { static: true };
export default function AngularRout() {
  return (
    <BaseLayout>
      <Angular />
    </BaseLayout>
  );
}
