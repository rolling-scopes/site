import { ReplacementTextToElement, plainTextReplacer } from './plain-text-replacer';
import { LinkCustom } from '@/shared/ui/link-custom';

export const replaceLinkInText = (
  sourceText: string,
  textToReplace: string,
  href: string,
  linkText: string,
) => {
  const replacementData: Array<ReplacementTextToElement> = [
    {
      text: textToReplace,
      replacement: {
        element: LinkCustom,
        props: {
          href: href,
          external: true,
          children: linkText,
        },
      },
    },
  ];

  return plainTextReplacer(sourceText, replacementData);
};
