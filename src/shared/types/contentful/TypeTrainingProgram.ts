import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeTrainingProgram'
 * @name TypeTrainingProgramFields
 * @type {TypeTrainingProgramFields}
 * @memberof TypeTrainingProgram
 */
export interface TypeTrainingProgramFields {
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'content' (content)
   * @name content
   * @localized false
   */
  content: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'image' (image)
   * @name image
   * @localized false
   */
  image?: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'registrationLinkText' (registrationLinkText)
   * @name registrationLinkText
   * @localized false
   */
  registrationLinkText: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'registrationClosedLinkText' (registrationClosedLinkText)
   * @name registrationClosedLinkText
   * @localized false
   */
  registrationClosedLinkText: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'trainingProgram' (Training Program)
 * @name TypeTrainingProgramSkeleton
 * @type {TypeTrainingProgramSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-13T19:37:14.861Z
 * @version 9
 */
export type TypeTrainingProgramSkeleton = EntrySkeletonType<
  TypeTrainingProgramFields,
  'trainingProgram'
>;
/**
 * Entry type definition for content type 'trainingProgram' (Training Program)
 * @name TypeTrainingProgram
 * @type {TypeTrainingProgram}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-13T19:37:14.861Z
 * @version 9
 */
export type TypeTrainingProgram<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeTrainingProgramSkeleton, Modifiers, Locales>;
export type TypeTrainingProgramWithoutLinkResolutionResponse =
  TypeTrainingProgram<'WITHOUT_LINK_RESOLUTION'>;
export type TypeTrainingProgramWithoutUnresolvableLinksResponse =
  TypeTrainingProgram<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeTrainingProgramWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeTrainingProgram<'WITH_ALL_LOCALES', Locales>;
export type TypeTrainingProgramWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeTrainingProgram<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeTrainingProgramWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeTrainingProgram<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
