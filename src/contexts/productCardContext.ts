import { createContext } from 'react';
import { ProductType } from '../types/ProductType';

type ProductCardContextProps = {
  product: ProductType;
  counter: number;
  increaseBy: (value: number) => void;
};

const productCardContext = createContext<ProductCardContextProps>({} as ProductCardContextProps);

const ProductCardProvider = productCardContext.Provider;

export { ProductCardProvider, productCardContext };
