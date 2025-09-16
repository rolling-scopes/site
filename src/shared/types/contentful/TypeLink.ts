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
  disabledLabel: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'link' (link)
   * @name link
   * @localized false
   */
  link: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'icon' (icon)
   * @name icon
   * @localized false
   */
  icon?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'link' (link)
 * @name TypeLinkSkeleton
 * @type {TypeLinkSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-31T18:36:55.863Z
 * @version 15
 */
export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, 'link'>;
/**
 * Entry type definition for content type 'link' (link)
 * @name TypeLink
 * @type {TypeLink}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-31T18:36:55.863Z
 * @version 15
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
