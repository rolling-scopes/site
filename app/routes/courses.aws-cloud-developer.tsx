import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { AwsDeveloper } from '@/pages/aws-developer';
import { courses } from 'data';

export const handle = { static: true };

export default function AwsDeveloperRout() {
  return (
    <BaseLayout>
      <AwsDeveloper courses={courses} />
    </BaseLayout>
  );
}
