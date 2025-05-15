import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeCourse'
 * @name TypeCourseFields
 * @type {TypeCourseFields}
 * @memberof TypeCourse
 */
export interface TypeCourseFields {
  /**
   * Field type definition for field 'name' (name)
   * @name name
   * @localized false
   */
  name: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'url' (url)
   * @name url
   * @localized false
   */
  url: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'subTitle' (subTitle)
   * @name subTitle
   * @localized false
   */
  subTitle?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'icon' (icon)
   * @name icon
   * @localized false
   */
  icon: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'iconSmall' (iconSmall)
   * @name iconSmall
   * @localized false
   */
  iconSmall: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'iconFooter' (iconFooter)
   * @name iconFooter
   * @localized false
   */
  iconFooter: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'secondaryIcon' (secondaryIcon)
   * @name secondaryIcon
   * @localized false
   */
  secondaryIcon: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'language' (language)
   * @name language
   * @localized false
   * @summary Should contain course language (en, ru)
   */
  language: EntryFieldTypes.Symbol<'en' | 'ru'>;
  /**
   * Field type definition for field 'mode' (mode)
   * @name mode
   * @localized false
   * @summary Should contain either "offline" or "online" mode
   */
  mode: EntryFieldTypes.Symbol<'offline' | 'online'>;
  /**
   * Field type definition for field 'backgroundColor' (backgroundColor)
   * @name backgroundColor
   * @localized false
   * @summary Should contain valid Hex color value
   */
  backgroundColor: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'accentColor' (accentColor)
   * @name accentColor
   * @localized false
   * @summary Should contain valid Hex color value.
   */
  accentColor: EntryFieldTypes.Symbol;
  scheduleUrl: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

/**
 * Entry skeleton type definition for content type 'course' (Course)
 * @name TypeCourseSkeleton
 * @type {TypeCourseSkeleton}
 * @author 5yCs5AqlcAan6ySHEWFdJn
 * @since 2022-02-09T19:40:33.011Z
 * @version 7
 */
export type TypeCourseSkeleton = EntrySkeletonType<TypeCourseFields, 'course'>;
/**
 * Entry type definition for content type 'course' (Course)
 * @name TypeCourse
 * @type {TypeCourse}
 * @author 5yCs5AqlcAan6ySHEWFdJn
 * @since 2022-02-09T19:40:33.011Z
 * @version 7
 */
export type TypeCourse<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCourseSkeleton, Modifiers, Locales>;
export type TypeCourseWithoutLinkResolutionResponse = TypeCourse<'WITHOUT_LINK_RESOLUTION'>;
export type TypeCourseWithoutUnresolvableLinksResponse = TypeCourse<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeCourseWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCourse<
  'WITH_ALL_LOCALES',
  Locales
>;
export type TypeCourseWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeCourse<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeCourseWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeCourse<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
