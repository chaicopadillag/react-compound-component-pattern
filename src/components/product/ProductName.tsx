import React, { useContext } from 'react';
import { productCardContext } from '../../contexts/productCardContext';
import styles from '../../styles/styles.module.css';

export const ProductName = () => {
  const {
    product: { name },
  } = useContext(productCardContext);
  return <span className={styles.productDescription}>{name}</span>;
};
