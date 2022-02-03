import React, { FC, useCallback, useContext } from 'react';
import { productCardContext } from '../../contexts/productCardContext';
import styles from '../../styles/styles.module.css';
import { ProductButtonsProps } from '../../types/ProductType';

export const ProductButtons: FC<ProductButtonsProps> = ({ className }) => {
  const { counter, increaseBy, maxCount } = useContext(productCardContext);

  const isMaxReached = useCallback(() => {
    return !!maxCount && counter === maxCount;
  }, [counter, maxCount]);

  return (
    <div className={styles.buttonsContainer}>
      <button className={`${styles.buttonMinus} ${className}`} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={`${styles.countLabel} ${className}`}> {counter}</div>
      <button className={`${styles.buttonAdd}  ${isMaxReached() ? styles.disabled : className}`} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
