import { generateLangParams } from '@/entities/page/helpers/generate-lang-params';

export const generateStaticParams = generateLangParams;

export default function Layout({ children }: LayoutProps<'/[lang]'>) {
  return children;
}
