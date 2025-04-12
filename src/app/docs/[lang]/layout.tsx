import { DocsLayout } from '../components/docs-layout/docs-layout';
import { fetchMenu } from '../utils/fetchMenu';
import { Language } from '@/shared/types';

type RouteParams = { lang: Language;
  slug: string[]; };

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<RouteParams>;
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { lang } = await params;
  const menu = await fetchMenu(lang);

  return (
    <DocsLayout menu={menu} lang={lang}>
      {children}
    </DocsLayout>
  );
}
