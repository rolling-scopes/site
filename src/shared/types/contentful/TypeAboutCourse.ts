import type { TypeAboutCourseItemSkeleton } from './TypeAboutCourseItem';
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeAboutCourse'
 * @name TypeAboutCourseFields
 * @type {TypeAboutCourseFields}
 * @memberof TypeAboutCourse
 */
export interface TypeAboutCourseFields {
  /**
   * Field type definition for field 'tag' (tag)
   * @name tag
   * @localized false
   * @summary This tag field is used internally only in contenful to unique identify identical content. THIS FIELD WILL NOT BE SHOWN ON THE WEBSITE
   */
  tag?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized true
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'subTitle' (subTitle)
   * @name subTitle
   * @localized false
   */
  subTitle?: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'gridItems' (gridItems)
   * @name gridItems
   * @localized false
   */
  gridItems: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAboutCourseItemSkeleton>>;
  /**
   * Field type definition for field 'registrationLinkText' (registrationLinkText)
   * @name registrationLinkText
   * @localized true
   */
  registrationLinkText: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'registrationClosedLinkText' (registrationClosedLinkText)
   * @name registrationClosedLinkText
   * @localized true
   */
  registrationClosedLinkText: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'aboutCourse' (About Course)
 * @name TypeAboutCourseSkeleton
 * @type {TypeAboutCourseSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-16T19:51:09.481Z
 * @version 17
 */
export type TypeAboutCourseSkeleton = EntrySkeletonType<TypeAboutCourseFields, 'aboutCourse'>;
/**
 * Entry type definition for content type 'aboutCourse' (About Course)
 * @name TypeAboutCourse
 * @type {TypeAboutCourse}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-16T19:51:09.481Z
 * @version 17
 */
export type TypeAboutCourse<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeAboutCourseSkeleton, Modifiers, Locales>;
export type TypeAboutCourseWithoutLinkResolutionResponse =
  TypeAboutCourse<'WITHOUT_LINK_RESOLUTION'>;
export type TypeAboutCourseWithoutUnresolvableLinksResponse =
  TypeAboutCourse<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeAboutCourseWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeAboutCourse<'WITH_ALL_LOCALES', Locales>;
export type TypeAboutCourseWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeAboutCourse<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeAboutCourseWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeAboutCourse<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
