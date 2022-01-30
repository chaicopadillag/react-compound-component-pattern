import React, { useContext } from 'react';
import { productCardContext } from '../../contexts/productCardContext';
import styles from '../../styles/styles.module.css';
import notImage from '../../assets/no-image.jpg';

export const ProductImage = () => {
  const {
    product: { image = '' },
  } = useContext(productCardContext);

  return <img className={styles.productImg} src={image ? image : notImage} alt='Coffe Code' />;
};
