import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { AwsDevOps } from '@/pages/aws-devops';

export const handle = { static: true };

export default function AwsDevOpsRout() {
  return (
    <BaseLayout>
      <AwsDevOps />
    </BaseLayout>
  );
}
