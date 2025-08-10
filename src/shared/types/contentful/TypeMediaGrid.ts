import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeMediaGrid'
 * @name TypeMediaGridFields
 * @type {TypeMediaGridFields}
 * @memberof TypeMediaGrid
 */
export interface TypeMediaGridFields {
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'description' (description)
   * @name description
   * @localized false
   */
  description?: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'media' (media)
   * @name media
   * @localized false
   */
  media: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'settings' (settings)
   * @name settings
   * @localized false
   */
  settings?: EntryFieldTypes.Object;
}

/**
 * Entry skeleton type definition for content type 'mediaGrid' (Media Grid)
 * @name TypeMediaGridSkeleton
 * @type {TypeMediaGridSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-07-16T12:45:40.455Z
 * @version 23
 */
export type TypeMediaGridSkeleton = EntrySkeletonType<TypeMediaGridFields, 'mediaGrid'>;
/**
 * Entry type definition for content type 'mediaGrid' (Media Grid)
 * @name TypeMediaGrid
 * @type {TypeMediaGrid}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-07-16T12:45:40.455Z
 * @version 23
 */
export type TypeMediaGrid<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeMediaGridSkeleton, Modifiers, Locales>;
export type TypeMediaGridWithoutLinkResolutionResponse = TypeMediaGrid<'WITHOUT_LINK_RESOLUTION'>;
export type TypeMediaGridWithoutUnresolvableLinksResponse =
  TypeMediaGrid<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeMediaGridWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeMediaGrid<'WITH_ALL_LOCALES', Locales>;
export type TypeMediaGridWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeMediaGrid<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeMediaGridWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeMediaGrid<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
