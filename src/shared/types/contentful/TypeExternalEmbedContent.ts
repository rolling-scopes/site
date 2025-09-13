import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeExternalEmbedContent'
 * @name TypeExternalEmbedContentFields
 * @type {TypeExternalEmbedContentFields}
 * @memberof TypeExternalEmbedContent
 */
export interface TypeExternalEmbedContentFields {
  /**
   * Field type definition for field 'tag' (tag)
   * @name tag
   * @localized false
   */
  tag: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'type' (type)
   * @name type
   * @localized false
   */
  type: EntryFieldTypes.Symbol<
    'all-courses' | 'mentor-talks-youtube-player' | 'mentorship-courses'
  >;
}

/**
 * Entry skeleton type definition for content type 'externalEmbedContent' (External Embed Content)
 * @name TypeExternalEmbedContentSkeleton
 * @type {TypeExternalEmbedContentSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-06T09:38:59.915Z
 * @version 5
 */
export type TypeExternalEmbedContentSkeleton = EntrySkeletonType<
  TypeExternalEmbedContentFields,
  'externalEmbedContent'
>;
/**
 * Entry type definition for content type 'externalEmbedContent' (External Embed Content)
 * @name TypeExternalEmbedContent
 * @type {TypeExternalEmbedContent}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-06T09:38:59.915Z
 * @version 5
 */
export type TypeExternalEmbedContent<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeExternalEmbedContentSkeleton, Modifiers, Locales>;
export type TypeExternalEmbedContentWithoutLinkResolutionResponse =
  TypeExternalEmbedContent<'WITHOUT_LINK_RESOLUTION'>;
export type TypeExternalEmbedContentWithoutUnresolvableLinksResponse =
  TypeExternalEmbedContent<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeExternalEmbedContentWithAllLocalesResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeExternalEmbedContent<'WITH_ALL_LOCALES', Locales>;
export type TypeExternalEmbedContentWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeExternalEmbedContent<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeExternalEmbedContentWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeExternalEmbedContent<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
