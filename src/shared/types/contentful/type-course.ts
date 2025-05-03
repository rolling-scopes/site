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
  url?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'course' (Course)
 * @name TypeCourseSkeleton
 * @type {TypeCourseSkeleton}
 * @author 5yCs5AqlcAan6ySHEWFdJn
 * @since 2022-02-09T19:40:33.011Z
 * @version 3
 */
export type TypeCourseSkeleton = EntrySkeletonType<TypeCourseFields, 'course'>;
/**
 * Entry type definition for content type 'course' (Course)
 * @name TypeCourse
 * @type {TypeCourse}
 * @author 5yCs5AqlcAan6ySHEWFdJn
 * @since 2022-02-09T19:40:33.011Z
 * @version 3
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
