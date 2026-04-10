import { useState, useEffect } from 'react';

/**
 * A custom hook to debounce high-frequency state updates like searching.
 * Useful for performance scaling and minimizing backend API calls.
 */
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Return a cleanup function that will be called every time useEffect is re-called.
    // This clears the timeout if value changes (or component unmounts), 
    // ensuring the debouncedValue is only set if the value has stopped changing for [delay] ms.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
