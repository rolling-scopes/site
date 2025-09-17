import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeLink'
 * @name TypeLinkFields
 * @type {TypeLinkFields}
 * @memberof TypeLink
 */
export interface TypeLinkFields {
  /**
   * Field type definition for field 'tag' (tag)
   * @name tag
   * @localized false
   * @summary This tag field is used internally only in contenful to unique identify identical content. THIS FIELD WILL NOT BE SHOWN ON THE WEBSITE
   */
  tag?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'type' (type)
   * @name type
   * @localized false
   * @summary Static → enter a custom URL in the Link field. Dynamic (e.g. Course Registration) → the app will fill in the link automatically, so the Link field is ignored.
   */
  type: EntryFieldTypes.Symbol<'course-registration' | 'static'>;
  /**
   * Field type definition for field 'variant' (variant)
   * @name variant
   * @localized false
   */
  variant: EntryFieldTypes.Symbol<'primary' | 'rounded' | 'secondary' | 'social' | 'textLink'>;
  /**
   * Field type definition for field 'label' (label)
   * @name label
   * @localized true
   */
  label: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'disabledLabel' (disabledLabel)
   * @name disabledLabel
   * @localized true
   */
  disabledLabel?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'link' (link)
   * @name link
   * @localized false
   * @summary Use a full URL for external sites (e.g. https://example.com). Use a relative path for internal pages (e.g. /courses). This field is only used when Link Type = Static.
   */
  link?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'iconLeft' (iconLeft)
   * @name iconLeft
   * @localized false
   */
  iconLeft?: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'iconRight' (iconRight)
   * @name iconRight
   * @localized false
   */
  iconRight?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'link' (link)
 * @name TypeLinkSkeleton
 * @type {TypeLinkSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-31T18:36:55.863Z
 * @version 29
 */
export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, 'link'>;
/**
 * Entry type definition for content type 'link' (link)
 * @name TypeLink
 * @type {TypeLink}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-31T18:36:55.863Z
 * @version 29
 */
export type TypeLink<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeLinkSkeleton, Modifiers, Locales>;
export type TypeLinkWithoutLinkResolutionResponse = TypeLink<'WITHOUT_LINK_RESOLUTION'>;
export type TypeLinkWithoutUnresolvableLinksResponse = TypeLink<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeLinkWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeLink<
  'WITH_ALL_LOCALES',
  Locales
>;
export type TypeLinkWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeLink<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeLinkWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeLink<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
