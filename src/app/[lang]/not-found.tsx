import { Metadata } from 'next';

import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { NotFound } from '@/views/not-found/not-found';

export async function generateMetadata(): Promise<Metadata> {
  const { title } = await pageStore.loadPage(PAGE_TYPE.NOT_FOUND);

  return { title };
}

export default async function NotFoundRoute() {
  const { sections } = await pageStore.loadPage(PAGE_TYPE.NOT_FOUND);

  return <NotFound sections={sections} />;
}
