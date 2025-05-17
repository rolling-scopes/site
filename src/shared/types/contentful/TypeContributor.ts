import type { TypeCourseSkeleton } from './TypeCourse';
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeContributor'
 * @name TypeContributorFields
 * @type {TypeContributorFields}
 * @memberof TypeContributor
 */
export interface TypeContributorFields {
  /**
   * Field type definition for field 'name' (name)
   * @name name
   * @localized true
   */
  name?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'githubId' (githubId)
   * @name githubId
   * @localized false
   */
  githubId: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'avatar' (avatar)
   * @name avatar
   * @localized false
   */
  avatar: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'jobTitle' (jobTitle)
   * @name jobTitle
   * @localized true
   */
  jobTitle?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'description' (about)
   * @name about
   * @localized true
   */
  description?: EntryFieldTypes.Text;
  /**
   * Field type definition for field 'courses' (Courses)
   * @name Courses
   * @localized false
   */
  courses?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCourseSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'contributor' (Contributor)
 * @name TypeContributorSkeleton
 * @type {TypeContributorSkeleton}
 * @author 5yCs5AqlcAan6ySHEWFdJn
 * @since 2025-01-12T21:52:11.873Z
 * @version 19
 */
export type TypeContributorSkeleton = EntrySkeletonType<TypeContributorFields, 'contributor'>;
/**
 * Entry type definition for content type 'contributor' (Contributor)
 * @name TypeContributor
 * @type {TypeContributor}
 * @author 5yCs5AqlcAan6ySHEWFdJn
 * @since 2025-01-12T21:52:11.873Z
 * @version 19
 */
export type TypeContributor<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeContributorSkeleton, Modifiers, Locales>;
export type TypeContributorWithoutLinkResolutionResponse =
  TypeContributor<'WITHOUT_LINK_RESOLUTION'>;
export type TypeContributorWithoutUnresolvableLinksResponse =
  TypeContributor<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeContributorWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeContributor<'WITH_ALL_LOCALES', Locales>;
export type TypeContributorWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeContributor<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeContributorWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeContributor<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
