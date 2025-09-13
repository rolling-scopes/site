import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeSlide'
 * @name TypeSlideFields
 * @type {TypeSlideFields}
 * @memberof TypeSlide
 */
export interface TypeSlideFields {
  /**
   * Field type definition for field 'variant' (variant)
   * @name variant
   * @localized false
   */
  variant: EntryFieldTypes.Symbol<'mentorship'>;
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'subTitle' (subTitle)
   * @name subTitle
   * @localized false
   */
  subTitle?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'content' (content)
   * @name content
   * @localized false
   */
  content?: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'icon' (icon)
   * @name icon
   * @localized false
   */
  icon?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'slide' (Slide)
 * @name TypeSlideSkeleton
 * @type {TypeSlideSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-09-02T20:17:21.167Z
 * @version 1
 */
export type TypeSlideSkeleton = EntrySkeletonType<TypeSlideFields, 'slide'>;
/**
 * Entry type definition for content type 'slide' (Slide)
 * @name TypeSlide
 * @type {TypeSlide}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-09-02T20:17:21.167Z
 * @version 1
 */
export type TypeSlide<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSlideSkeleton, Modifiers, Locales>;
export type TypeSlideWithoutLinkResolutionResponse = TypeSlide<'WITHOUT_LINK_RESOLUTION'>;
export type TypeSlideWithoutUnresolvableLinksResponse = TypeSlide<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeSlideWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSlide<
  'WITH_ALL_LOCALES',
  Locales
>;
export type TypeSlideWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeSlide<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeSlideWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeSlide<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
