import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeHighlightCard'
 * @name TypeHighlightCardFields
 * @type {TypeHighlightCardFields}
 * @memberof TypeHighlightCard
 */
export interface TypeHighlightCardFields {
  /**
   * Field type definition for field 'tag' (tag)
   * @name tag
   * @localized false
   * @summary This tag field is used internally only in contenful to unique identify identical content. THIS FIELD WILL NOT BE SHOWN ON THE WEBSITE
   */
  tag?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'heading' (heading)
   * @name heading
   * @localized true
   */
  heading: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'content' (content)
   * @name content
   * @localized true
   */
  content: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'icon' (icon)
   * @name icon
   * @localized false
   */
  icon: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'highlightCard' (Highlight Card)
 * @name TypeHighlightCardSkeleton
 * @type {TypeHighlightCardSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-07-09T19:31:35.038Z
 * @version 1
 */
export type TypeHighlightCardSkeleton = EntrySkeletonType<TypeHighlightCardFields, 'highlightCard'>;
/**
 * Entry type definition for content type 'highlightCard' (Highlight Card)
 * @name TypeHighlightCard
 * @type {TypeHighlightCard}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-07-09T19:31:35.038Z
 * @version 1
 */
export type TypeHighlightCard<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHighlightCardSkeleton, Modifiers, Locales>;
export type TypeHighlightCardWithoutLinkResolutionResponse =
  TypeHighlightCard<'WITHOUT_LINK_RESOLUTION'>;
export type TypeHighlightCardWithoutUnresolvableLinksResponse =
  TypeHighlightCard<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeHighlightCardWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeHighlightCard<'WITH_ALL_LOCALES', Locales>;
export type TypeHighlightCardWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeHighlightCard<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeHighlightCardWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeHighlightCard<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
