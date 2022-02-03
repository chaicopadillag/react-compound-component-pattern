import { useEffect, useRef, useState } from 'react';
import { ProductHookProps } from '../types/CartType';

export default function useProduct({ onChange, product, count = 0, initialValues }: ProductHookProps) {
  const [counter, setCounter] = useState(initialValues?.count || count);

  const isControlledCount = useRef(!!onChange);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    if (isControlledCount.current && onChange) {
      return onChange({ product, count: value });
    }

    let newCounter = Math.max(counter + value, 0);
    newCounter = initialValues?.maxCount ? Math.min(newCounter, initialValues.maxCount) : newCounter;

    setCounter(newCounter);

    onChange && onChange({ count: newCounter, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || 0);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(count);
  }, [count]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
    reset,
    maxCount: initialValues?.maxCount,
  };
}
