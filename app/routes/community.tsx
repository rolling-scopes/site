import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Community } from '@/pages/community';

export default function CommunityRout() {
  return (
    <BaseLayout>
      <Community />
    </BaseLayout>
  );
}

export const handle = { static: true };
