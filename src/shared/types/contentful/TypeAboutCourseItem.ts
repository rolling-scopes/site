import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeAboutCourseItem'
 * @name TypeAboutCourseItemFields
 * @type {TypeAboutCourseItemFields}
 * @memberof TypeAboutCourseItem
 */
export interface TypeAboutCourseItemFields {
  /**
   * Field type definition for field 'tag' (tag)
   * @name tag
   * @localized false
   * @summary This tag field is used internally only in contenful to unique identify identical content. THIS FIELD WILL NOT BE SHOWN ON THE WEBSITE
   */
  tag?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'variant' (variant)
   * @name variant
   * @localized false
   */
  variant: EntryFieldTypes.Symbol<'base' | 'mentorship'>;
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
 * Entry skeleton type definition for content type 'aboutCourseItem' (Feature Item)
 * @name TypeAboutCourseItemSkeleton
 * @type {TypeAboutCourseItemSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-16T19:52:39.219Z
 * @version 19
 */
export type TypeAboutCourseItemSkeleton = EntrySkeletonType<
  TypeAboutCourseItemFields,
  'aboutCourseItem'
>;
/**
 * Entry type definition for content type 'aboutCourseItem' (Feature Item)
 * @name TypeAboutCourseItem
 * @type {TypeAboutCourseItem}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-16T19:52:39.219Z
 * @version 19
 */
export type TypeAboutCourseItem<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeAboutCourseItemSkeleton, Modifiers, Locales>;
export type TypeAboutCourseItemWithoutLinkResolutionResponse =
  TypeAboutCourseItem<'WITHOUT_LINK_RESOLUTION'>;
export type TypeAboutCourseItemWithoutUnresolvableLinksResponse =
  TypeAboutCourseItem<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeAboutCourseItemWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeAboutCourseItem<'WITH_ALL_LOCALES', Locales>;
export type TypeAboutCourseItemWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeAboutCourseItem<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeAboutCourseItemWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeAboutCourseItem<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
