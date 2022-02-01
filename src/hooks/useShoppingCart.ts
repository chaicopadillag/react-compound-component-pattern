import { useState } from 'react';
import { CartType, OnChangeCardType, ProductType } from '../types/CartType';

const useShoppingCart = () => {
  const [cartState, setCartState] = useState<CartType>({});

  const onChangeCounterCard = ({ count, product }: OnChangeCardType) => {
    setCartState((prevState) => {
      const newCart: ProductType = prevState[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(newCart.count + count, 0) > 0) {
        newCart.count += count;

        return {
          ...prevState,
          [product.id]: newCart,
        };
      }
      const { [product.id]: _, ...rest } = prevState;

      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = prevState;
      //   return rest;
      // }
      // return {
      //   ...prevState,
      //   [product.id]: {
      //     ...product,
      //     count,
      //   },
      // };
    });
  };

  return {
    cartState,
    onChangeCounterCard,
  };
};
export default useShoppingCart;
