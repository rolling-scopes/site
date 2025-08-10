import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeSocialLink'
 * @name TypeSocialLinkFields
 * @type {TypeSocialLinkFields}
 * @memberof TypeSocialLink
 */
export interface TypeSocialLinkFields {
  /**
   * Field type definition for field 'label' (label)
   * @name label
   * @localized false
   */
  label?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'icon' (icon)
   * @name icon
   * @localized false
   */
  icon?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'socialLink' (Social link)
 * @name TypeSocialLinkSkeleton
 * @type {TypeSocialLinkSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-09T09:28:34.620Z
 * @version 1
 */
export type TypeSocialLinkSkeleton = EntrySkeletonType<TypeSocialLinkFields, 'socialLink'>;
/**
 * Entry type definition for content type 'socialLink' (Social link)
 * @name TypeSocialLink
 * @type {TypeSocialLink}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-09T09:28:34.620Z
 * @version 1
 */
export type TypeSocialLink<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSocialLinkSkeleton, Modifiers, Locales>;
export type TypeSocialLinkWithoutLinkResolutionResponse = TypeSocialLink<'WITHOUT_LINK_RESOLUTION'>;
export type TypeSocialLinkWithoutUnresolvableLinksResponse =
  TypeSocialLink<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeSocialLinkWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeSocialLink<'WITH_ALL_LOCALES', Locales>;
export type TypeSocialLinkWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeSocialLink<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeSocialLinkWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeSocialLink<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
