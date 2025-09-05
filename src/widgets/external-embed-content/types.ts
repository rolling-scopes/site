import type {
  TypeExternalEmbedContentWithoutUnresolvableLinksResponse,
} from '@/shared/types/contentful';

export type ExternalEmbedContentData = {
  type: TypeExternalEmbedContentWithoutUnresolvableLinksResponse['fields']['type'];
};
