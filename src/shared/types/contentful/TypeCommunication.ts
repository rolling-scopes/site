import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeCommunication'
 * @name TypeCommunicationFields
 * @type {TypeCommunicationFields}
 * @memberof TypeCommunication
 */
export interface TypeCommunicationFields {
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized true
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'content' (content)
   * @name content
   * @localized true
   */
  content: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'image' (image)
   * @name image
   * @localized false
   */
  image: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'communication' (Communication)
 * @name TypeCommunicationSkeleton
 * @type {TypeCommunicationSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-17T19:44:22.128Z
 * @version 3
 */
export type TypeCommunicationSkeleton = EntrySkeletonType<TypeCommunicationFields, 'communication'>;
/**
 * Entry type definition for content type 'communication' (Communication)
 * @name TypeCommunication
 * @type {TypeCommunication}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-17T19:44:22.128Z
 * @version 3
 */
export type TypeCommunication<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCommunicationSkeleton, Modifiers, Locales>;
export type TypeCommunicationWithoutLinkResolutionResponse =
  TypeCommunication<'WITHOUT_LINK_RESOLUTION'>;
export type TypeCommunicationWithoutUnresolvableLinksResponse =
  TypeCommunication<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeCommunicationWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeCommunication<'WITH_ALL_LOCALES', Locales>;
export type TypeCommunicationWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeCommunication<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeCommunicationWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeCommunication<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
