import type { TypeAboutCourseSkeleton } from './TypeAboutCourse';
import type { TypeCertificationSkeleton } from './TypeCertification';
import type { TypeCommunicationSkeleton } from './TypeCommunication';
import type { TypeHeroSectionSkeleton } from './TypeHeroSection';
import type { TypeTrainingProgramSkeleton } from './TypeTrainingProgram';
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeHomePage'
 * @name TypeHomePageFields
 * @type {TypeHomePageFields}
 * @memberof TypeHomePage
 */
export interface TypeHomePageFields {
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   * @summary The title will be used in metadata title (shown in a browser's title bar)
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'sections' (sections)
   * @name sections
   * @localized false
   */
  sections?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeAboutCourseSkeleton
      | TypeCertificationSkeleton
      | TypeCommunicationSkeleton
      | TypeHeroSectionSkeleton
      | TypeTrainingProgramSkeleton
    >
  >;
}

/**
 * Entry skeleton type definition for content type 'homePage' (Course Page)
 * @name TypeHomePageSkeleton
 * @type {TypeHomePageSkeleton}
 * @author 7eBAEG99Zg1EDoAM5bOSWX
 * @since 2025-03-27T06:29:32.332Z
 * @version 41
 */
export type TypeHomePageSkeleton = EntrySkeletonType<TypeHomePageFields, 'homePage'>;
/**
 * Entry type definition for content type 'homePage' (Course Page)
 * @name TypeHomePage
 * @type {TypeHomePage}
 * @author 7eBAEG99Zg1EDoAM5bOSWX
 * @since 2025-03-27T06:29:32.332Z
 * @version 41
 */
export type TypeHomePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHomePageSkeleton, Modifiers, Locales>;
export type TypeHomePageWithoutLinkResolutionResponse = TypeHomePage<'WITHOUT_LINK_RESOLUTION'>;
export type TypeHomePageWithoutUnresolvableLinksResponse =
  TypeHomePage<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeHomePageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeHomePage<'WITH_ALL_LOCALES', Locales>;
export type TypeHomePageWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeHomePage<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeHomePageWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeHomePage<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
