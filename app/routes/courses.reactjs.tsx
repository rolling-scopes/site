import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { React } from '@/pages/react';

export const handle = { static: true };

export default function ReactRout() {
  return (
    <BaseLayout>
      <React />
    </BaseLayout>
  );
}
