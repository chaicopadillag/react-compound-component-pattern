import { ProductType as ProductType_ } from './ProductType';
export type ProductType = {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  count: number;
};
export type CartType = {
  [key: string]: ProductType;
};

export type OnChangeCardType = {
  product: ProductType_;
  count: number;
};

export type ProductHookProps = {
  product: ProductType_;
  onChange?: (prop: OnChangeCardType) => void;
  count?: number;
};
