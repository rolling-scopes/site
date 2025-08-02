import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeUpcomingCourses'
 * @name TypeUpcomingCoursesFields
 * @type {TypeUpcomingCoursesFields}
 * @memberof TypeUpcomingCourses
 */
export interface TypeUpcomingCoursesFields {
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'image' (image)
   * @name image
   * @localized false
   */
  image?: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'linkLabel' (linkLabel)
   * @name linkLabel
   * @localized false
   */
  linkLabel: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'linkUrl' (linkUrl)
   * @name linkUrl
   * @localized false
   * @summary By default set to '/courses'
   */
  linkUrl?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'upcomingCourses' (Upcoming Courses)
 * @name TypeUpcomingCoursesSkeleton
 * @type {TypeUpcomingCoursesSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-07-16T12:12:38.743Z
 * @version 9
 */
export type TypeUpcomingCoursesSkeleton = EntrySkeletonType<
  TypeUpcomingCoursesFields,
  'upcomingCourses'
>;
/**
 * Entry type definition for content type 'upcomingCourses' (Upcoming Courses)
 * @name TypeUpcomingCourses
 * @type {TypeUpcomingCourses}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-07-16T12:12:38.743Z
 * @version 9
 */
export type TypeUpcomingCourses<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeUpcomingCoursesSkeleton, Modifiers, Locales>;
export type TypeUpcomingCoursesWithoutLinkResolutionResponse =
  TypeUpcomingCourses<'WITHOUT_LINK_RESOLUTION'>;
export type TypeUpcomingCoursesWithoutUnresolvableLinksResponse =
  TypeUpcomingCourses<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeUpcomingCoursesWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeUpcomingCourses<'WITH_ALL_LOCALES', Locales>;
export type TypeUpcomingCoursesWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeUpcomingCourses<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeUpcomingCoursesWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeUpcomingCourses<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
