import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeVideoBlock'
 * @name TypeVideoBlockFields
 * @type {TypeVideoBlockFields}
 * @memberof TypeVideoBlock
 */
export interface TypeVideoBlockFields {
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized true
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'url' (url)
   * @name url
   * @localized true
   */
  url: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'videoTitle' (videoTitle)
   * @name videoTitle
   * @localized true
   */
  videoTitle: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'videoBlock' (Video Block)
 * @name TypeVideoBlockSkeleton
 * @type {TypeVideoBlockSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-18T20:17:03.834Z
 * @version 5
 */
export type TypeVideoBlockSkeleton = EntrySkeletonType<TypeVideoBlockFields, 'videoBlock'>;
/**
 * Entry type definition for content type 'videoBlock' (Video Block)
 * @name TypeVideoBlock
 * @type {TypeVideoBlock}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-18T20:17:03.834Z
 * @version 5
 */
export type TypeVideoBlock<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeVideoBlockSkeleton, Modifiers, Locales>;
export type TypeVideoBlockWithoutLinkResolutionResponse = TypeVideoBlock<'WITHOUT_LINK_RESOLUTION'>;
export type TypeVideoBlockWithoutUnresolvableLinksResponse =
  TypeVideoBlock<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeVideoBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeVideoBlock<'WITH_ALL_LOCALES', Locales>;
export type TypeVideoBlockWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeVideoBlock<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeVideoBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeVideoBlock<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
