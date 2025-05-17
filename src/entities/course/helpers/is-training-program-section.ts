import { TypeTrainingProgramWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import type { BaseEntry } from 'contentful';

/**
 * Determines whether a given section is of type `TypeTrainingProgramWithoutUnresolvableLinksResponse`.
 *
 * @param {TSection} section - The section object to be checked.
 * @return {boolean} - Returns true if the section is a training program, otherwise false.
 */
export function isTrainingProgramSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeTrainingProgramWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === 'trainingProgram';
}
