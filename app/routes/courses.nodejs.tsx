import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Nodejs } from '@/pages/nodejs';

export const handle = { static: true };

export default function NodejsRout() {
  return (
    <BaseLayout>
      <Nodejs />
    </BaseLayout>
  );
}
