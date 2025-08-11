import type { TypeMediaTextBlockSkeleton } from './TypeMediaTextBlock';
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeInfoGrid'
 * @name TypeInfoGridFields
 * @type {TypeInfoGridFields}
 * @memberof TypeInfoGrid
 */
export interface TypeInfoGridFields {
  /**
   * Field type definition for field 'tag' (tag)
   * @name tag
   * @localized false
   * @summary This tag field is used internally only in contenful to unique identify identical content. THIS FIELD WILL NOT BE SHOWN ON THE WEBSITE
   */
  tag?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'size' (size)
   * @name size
   * @localized false
   */
  size: EntryFieldTypes.Symbol<'large' | 'medium'>;
  /**
   * Field type definition for field 'gridItems' (gridItems)
   * @name gridItems
   * @localized false
   */
  gridItems: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMediaTextBlockSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'infoGrid' (Info Grid)
 * @name TypeInfoGridSkeleton
 * @type {TypeInfoGridSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-08T11:16:45.850Z
 * @version 9
 */
export type TypeInfoGridSkeleton = EntrySkeletonType<TypeInfoGridFields, 'infoGrid'>;
/**
 * Entry type definition for content type 'infoGrid' (Info Grid)
 * @name TypeInfoGrid
 * @type {TypeInfoGrid}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-08T11:16:45.850Z
 * @version 9
 */
export type TypeInfoGrid<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeInfoGridSkeleton, Modifiers, Locales>;
export type TypeInfoGridWithoutLinkResolutionResponse = TypeInfoGrid<'WITHOUT_LINK_RESOLUTION'>;
export type TypeInfoGridWithoutUnresolvableLinksResponse =
  TypeInfoGrid<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeInfoGridWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeInfoGrid<'WITH_ALL_LOCALES', Locales>;
export type TypeInfoGridWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeInfoGrid<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeInfoGridWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeInfoGrid<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
