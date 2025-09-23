import { PropsWithChildren } from 'react';

import { DocsLayout } from '@/app/docs/components/docs-layout/docs-layout';
import { fetchMenu } from '@/app/docs/utils/fetch-menu';
import { PageProps } from '@/entities/page/types';
import { Language } from '@/shared/types';

export default async function RootLayout({ children, params }: { params: Promise<Pick<Awaited<PageProps['params']>, 'lang'>> } & PropsWithChildren) {
  const { lang } = (await params) as { lang: Language };
  const menu = await fetchMenu(lang);

  return (
    <DocsLayout menu={menu} lang={lang}>
      {children}
    </DocsLayout>
  );
}
