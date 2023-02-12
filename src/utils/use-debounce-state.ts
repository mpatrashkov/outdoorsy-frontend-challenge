import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

export function useDebounceState<T>(value: T, wait: number): T {
  const [debouncedState, setDebouncedState] = useState<T>(value);

  const setStateDebounced = useCallback(
    debounce((newValue: T) => {
      setDebouncedState(newValue);
    }, wait),
    [wait]
  );

  useEffect(() => {
    setStateDebounced(value);
  }, [value, setStateDebounced]);

  return debouncedState;
}
