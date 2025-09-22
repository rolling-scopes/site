import { DocsLayout } from '@/app/docs/components/docs-layout/docs-layout';
import { fetchMenu } from '@/app/docs/utils/fetch-menu';

export default async function RootLayout({ children }: LayoutProps<'/docs'>) {
  const menu = await fetchMenu('en');

  return (
    <DocsLayout menu={menu} lang="en">
      {children}
    </DocsLayout>
  );
}
