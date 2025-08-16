import { TITLE_POSTFIX } from '@/app/docs/constants';
import { Language } from '@/shared/types';

export const docsLangMetadata = {
  title: `RS School Overview ${TITLE_POSTFIX}`,
  description:
    'RS School Docs: find rules, guides, FAQs, onboarding, and resources for students and mentors. Your hub for all Rolling Scopes School documentation.',
  keywords:
    'RS School docs, documentation, rules, guides, onboarding, FAQ, student resources, mentor resources',
  canonical: 'https://rs.school/docs',
  robots: {
    index: true,
    follow: true,
  },
};

export const generateDocsMetadata = (lang: Language, slugPath: string) => {
  const description =
    'RS School Docs: access rules, guides, FAQs, onboarding, and resources for students and mentors. Your hub for all Rolling Scopes School documentation.';

  const keywords =
    'RS School docs, documentation, rules, guides, onboarding, FAQ, student resources, mentor resources';
  const canonical = `https://rs.school/docs/${lang}/${slugPath}`;
  const robots = {
    index: true,
    follow: true,
  };

  return {
    description,
    keywords,
    canonical,
    robots,
  };
};
