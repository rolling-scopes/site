export type ApiMerchItem = {
  name: string;
  preview: string[];
  download: string[];
};

type ApiMerchCategory = {
  [key: string]: ApiMerchItem;
};

type ApiMerchData = {
  [category: string]: ApiMerchCategory;
};

export type ApiMerchItemAdapt = ApiMerchItem | ApiMerchCategory | ApiMerchData;
export type ApiMerchResponse = {
  [category: string]: ApiMerchData;
};

export type MerchProduct = {
  name: string;
  title: string;
  preview: string[];
  download: string[];
  tags: string[];
};
