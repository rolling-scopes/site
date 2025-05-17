import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeCertification'
 * @name TypeCertificationFields
 * @type {TypeCertificationFields}
 * @memberof TypeCertification
 */
export interface TypeCertificationFields {
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'content' (content)
   * @name content
   * @localized false
   */
  content: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'certification' (Certification)
 * @name TypeCertificationSkeleton
 * @type {TypeCertificationSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-17T19:42:47.626Z
 * @version 1
 */
export type TypeCertificationSkeleton = EntrySkeletonType<TypeCertificationFields, 'certification'>;
/**
 * Entry type definition for content type 'certification' (Certification)
 * @name TypeCertification
 * @type {TypeCertification}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-17T19:42:47.626Z
 * @version 1
 */
export type TypeCertification<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCertificationSkeleton, Modifiers, Locales>;
export type TypeCertificationWithoutLinkResolutionResponse =
  TypeCertification<'WITHOUT_LINK_RESOLUTION'>;
export type TypeCertificationWithoutUnresolvableLinksResponse =
  TypeCertification<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeCertificationWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeCertification<'WITH_ALL_LOCALES', Locales>;
export type TypeCertificationWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeCertification<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeCertificationWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeCertification<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
