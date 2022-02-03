import { CSSProperties, FC, ReactElement } from 'react';
import { OnChangeCardType } from './CartType';

export type InitialValueType = {
  count?: number;
  maxCount?: number;
};

export type ProductType = {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
};

export type CardProductProps = {
  product: ProductType;
  // children: ReactElement | ReactElement[];
  children: (args: CardChildrenProps) => JSX.Element | JSX.Element[];
  className?: string;
  style?: CSSProperties;
  onChange?: (prop: OnChangeCardType) => void;
  count?: number;
  initialValues?: InitialValueType;
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

export type CardChildrenProps = {
  count: number;
  isMaxCountReached: boolean;
  product: ProductType;
  maxCount?: number;
  increaseBy: (value: number) => void;
  reset: () => void;
};
