import { transformPageSections } from '@/shared/helpers/transform-page-sections';
import { SectionResolver } from '@/widgets/section-resolver';
import type { Block, Inline } from '@contentful/rich-text-types';

export function renderEntry(node: Inline | Block, inline?: boolean, courseEnrollUrl?: string) {
  const [section] = transformPageSections([node.data.target]);

  return <SectionResolver courseEnrollUrl={courseEnrollUrl} inline={inline} embedded section={section} />;
}
