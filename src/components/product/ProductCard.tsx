import { ProductCardProvider } from '../../contexts/productCardContext';
import useProduct from '../../hooks/useProduct';
import styles from '../../styles/styles.module.css';
import { CardProductProps } from '../../types/ProductType';
import { FC } from 'react';

const ProductCard: FC<CardProductProps> = ({ product, className = '', style, onChange, count, children }) => {
  const { counter, increaseBy } = useProduct({ onChange, product, count });

  return (
    <ProductCardProvider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductCardProvider>
  );
};

export default ProductCard;
