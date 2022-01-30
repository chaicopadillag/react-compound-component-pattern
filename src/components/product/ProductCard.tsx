import { ProductCardProvider } from '../../contexts/productCardContext';
import useProduct from '../../hooks/useProduct';
import styles from '../../styles/styles.module.css';
import { CardProps } from '../../types/ProductType';
import { FC } from 'react';

const ProductCard: FC<CardProps> = ({ product, children }) => {
  const { counter, increaseBy } = useProduct();

  return (
    <ProductCardProvider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </ProductCardProvider>
  );
};

export default ProductCard;
