import { TypeCertificationWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import type { BaseEntry } from 'contentful';

/**
 * Determines if the provided section is a certification section.
 *
 * @param {TSection} section - The section to evaluate.
 * @return {boolean} Returns true if the section is a certification section, otherwise false.
 */
export function isCertificationSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeCertificationWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === 'certification';
}
