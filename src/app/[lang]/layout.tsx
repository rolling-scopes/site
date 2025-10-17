import { PropsWithChildren } from 'react';

import { generateLangParams } from '@/entities/page/helpers/generate-lang-params';

export const generateStaticParams = generateLangParams;

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
