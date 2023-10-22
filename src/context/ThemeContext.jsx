'use client';

import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = window.localStorage.getItem('theme');
    return value || 'light';
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
