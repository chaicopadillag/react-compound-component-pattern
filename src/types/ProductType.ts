import { CSSProperties, FC, ReactElement } from 'react';
import { OnChangeCardType } from './CartType';

export type ProductType = {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
};

export type CardProductProps = {
  product: ProductType;
  children: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (prop: OnChangeCardType) => void;
  count?: number;
};

export type ProductNameProps = {
  className?: string;
  style?: CSSProperties;
};

export type ProductButtonsProps = {
  className?: string;
  style?: CSSProperties;
};

export type ProductCardType = React.FC<CardProductProps> & {
  Image: FC;
  Name: FC<ProductNameProps>;
  Buttons: FC<ProductButtonsProps>;
};
