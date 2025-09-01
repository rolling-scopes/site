import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeHeroSection'
 * @name TypeHeroSectionFields
 * @type {TypeHeroSectionFields}
 * @memberof TypeHeroSection
 */
export interface TypeHeroSectionFields {
  /**
   * Field type definition for field 'topHeading' (topHeading)
   * @name topHeading
   * @localized false
   */
  topHeading?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'heading' (heading)
   * @name heading
   * @localized false
   */
  heading: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'subHeading' (subHeading)
   * @name subHeading
   * @localized false
   */
  subHeading?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'image' (image)
   * @name image
   * @localized false
   */
  image?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'heroSection' (Hero section)
 * @name TypeHeroSectionSkeleton
 * @type {TypeHeroSectionSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-12T19:41:11.842Z
 * @version 7
 */
export type TypeHeroSectionSkeleton = EntrySkeletonType<TypeHeroSectionFields, 'heroSection'>;
/**
 * Entry type definition for content type 'heroSection' (Hero section)
 * @name TypeHeroSection
 * @type {TypeHeroSection}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-12T19:41:11.842Z
 * @version 7
 */
export type TypeHeroSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHeroSectionSkeleton, Modifiers, Locales>;
export type TypeHeroSectionWithoutLinkResolutionResponse =
  TypeHeroSection<'WITHOUT_LINK_RESOLUTION'>;
export type TypeHeroSectionWithoutUnresolvableLinksResponse =
  TypeHeroSection<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeHeroSectionWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeHeroSection<'WITH_ALL_LOCALES', Locales>;
export type TypeHeroSectionWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeHeroSection<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeHeroSectionWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeHeroSection<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
