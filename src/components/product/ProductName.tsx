import React, { FC, useContext } from 'react';
import { productCardContext } from '../../contexts/productCardContext';
import styles from '../../styles/styles.module.css';
import { ProductNameProps } from '../../types/ProductType';

export const ProductName: FC<ProductNameProps> = ({ className }) => {
  const {
    product: { name },
  } = useContext(productCardContext);
  return <span className={`${styles.productDescription} ${className}`}>{name}</span>;
};
