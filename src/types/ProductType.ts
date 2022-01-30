export type ProductType = {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
};

export type CardProps = {
  product: ProductType;
  children: React.ReactNode;
};

export type ProductCardType = React.FC<CardProps> & {
  Image: () => JSX.Element;
  Name: () => JSX.Element;
  Buttons: () => JSX.Element;
};
