import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout.tsx';
import { Community } from '@/widgets/community';

export default function CommunityRout() {
  return (
    <BaseLayout>
      <Community />
    </BaseLayout>
  );
}

export const handle = { static: true };
