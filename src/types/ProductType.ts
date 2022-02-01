import { CSSProperties, FC, ReactElement } from 'react';

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
