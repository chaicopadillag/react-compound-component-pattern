import { useEffect, useRef, useState } from 'react';
import { ProductHookProps } from '../types/CartType';

export default function useProduct({ onChange, product, count = 0 }: ProductHookProps) {
  const [counter, setCounter] = useState(count);
  const isControlledCount = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlledCount.current && onChange) {
      return onChange({ product, count: value });
    }

    const newCounter = Math.max(counter + value, 0);

    setCounter(newCounter);

    onChange && onChange({ count: newCounter, product });
  };

  useEffect(() => {
    setCounter(count);
  }, [count]);

  return {
    counter,
    increaseBy,
  };
}
