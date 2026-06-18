import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [largeFont, setLargeFont] = useState(() => {
    return localStorage.getItem('largeFont') === 'true';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light', 'high-contrast');
    } else if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark', 'high-contrast');
    } else if (theme === 'high-contrast') {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.classList.remove('dark', 'light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (largeFont) {
      document.documentElement.classList.add('text-lg');
    } else {
      document.documentElement.classList.remove('text-lg');
    }
    localStorage.setItem('largeFont', largeFont);
  }, [largeFont]);

  const toggleTheme = (newTheme) => setTheme(newTheme);
  const toggleFontSize = () => setLargeFont((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, largeFont, toggleFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
};
