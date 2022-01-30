import React, { useContext } from 'react';
import { productCardContext } from '../../contexts/productCardContext';
import styles from '../../styles/styles.module.css';

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext(productCardContext);
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
