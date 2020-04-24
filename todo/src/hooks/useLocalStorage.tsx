import { useState } from "react";

export function useLocalStorage(key: string, initialValue: any):any {
  const [storedValue, setStoredValue] = useState<any>(() => {
    const item: any = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = (value: any): any => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
