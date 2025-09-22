import { DocsLayout } from '@/app/docs/components/docs-layout/docs-layout';
import { fetchMenu } from '@/app/docs/utils/fetch-menu';
import { Language } from '@/shared/types';

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]/docs'>) {
  const { lang } = (await params) as { lang: Language };
  const menu = await fetchMenu(lang);

  return (
    <DocsLayout menu={menu} lang={lang}>
      {children}
    </DocsLayout>
  );
}
