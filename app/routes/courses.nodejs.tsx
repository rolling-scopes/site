import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Nodejs } from '@/pages/nodejs';
import { courses } from 'data';

export const handle = { static: true };

export default function NodejsRout() {
  return (
    <BaseLayout>
      <Nodejs courses={courses} />
    </BaseLayout>
  );
}
