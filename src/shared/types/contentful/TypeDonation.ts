import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeDonation'
 * @name TypeDonationFields
 * @type {TypeDonationFields}
 * @memberof TypeDonation
 */
export interface TypeDonationFields {
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   */
  title?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'content' (content)
   * @name content
   * @localized false
   */
  content?: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'image' (image)
   * @name image
   * @localized false
   */
  image?: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'leftButtonLabel' (leftButtonLabel)
   * @name leftButtonLabel
   * @localized false
   */
  leftButtonLabel: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'leftButtonLink' (leftButtonLink)
   * @name leftButtonLink
   * @localized false
   */
  leftButtonLink: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'leftButtonIcon' (leftButtonIcon)
   * @name leftButtonIcon
   * @localized false
   */
  leftButtonIcon: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'rightButtonLabel' (rightButtonLabel)
   * @name rightButtonLabel
   * @localized false
   */
  rightButtonLabel: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'rightButtonLink' (rightButtonLink)
   * @name rightButtonLink
   * @localized false
   */
  rightButtonLink: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'rightButtonIcon' (rightButtonIcon)
   * @name rightButtonIcon
   * @localized false
   */
  rightButtonIcon: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'donation' (Donation)
 * @name TypeDonationSkeleton
 * @type {TypeDonationSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-07-20T10:23:25.924Z
 * @version 5
 */
export type TypeDonationSkeleton = EntrySkeletonType<TypeDonationFields, 'donation'>;
/**
 * Entry type definition for content type 'donation' (Donation)
 * @name TypeDonation
 * @type {TypeDonation}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-07-20T10:23:25.924Z
 * @version 5
 */
export type TypeDonation<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeDonationSkeleton, Modifiers, Locales>;
export type TypeDonationWithoutLinkResolutionResponse = TypeDonation<'WITHOUT_LINK_RESOLUTION'>;
export type TypeDonationWithoutUnresolvableLinksResponse =
  TypeDonation<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeDonationWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeDonation<'WITH_ALL_LOCALES', Locales>;
export type TypeDonationWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeDonation<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeDonationWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeDonation<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
