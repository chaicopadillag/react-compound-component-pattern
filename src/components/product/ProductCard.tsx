import { ProductCardProvider } from '../../contexts/productCardContext';
import useProduct from '../../hooks/useProduct';
import styles from '../../styles/styles.module.css';
import { CardProductProps } from '../../types/ProductType';
import { FC } from 'react';

const ProductCard: FC<CardProductProps> = ({ product, className = '', style, onChange, count, initialValues, children }) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, count, initialValues });

  return (
    <ProductCardProvider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          maxCount,
          product,
          increaseBy,
          isMaxCountReached: !!maxCount && counter === maxCount,
          reset,
        })}
      </div>
    </ProductCardProvider>
  );
};

export default ProductCard;
