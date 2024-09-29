import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { AwsFundamentals } from '@/pages/aws-fundamentals';
import { courses } from 'data';

export const handle = { static: true };

export default function AwsFundamentalsRout() {
  return (
    <BaseLayout>
      <AwsFundamentals courses={courses} />
    </BaseLayout>
  );
}
