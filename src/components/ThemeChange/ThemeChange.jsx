import React from 'react';
import { useDarkMode } from '../../context/theme';
import style from './ThemeChange.module.pcss';

export default function ThemeChange() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={style.themeBtn} onClick={toggleDarkMode}>
      {darkMode ? `🌕` : `🌑`}
    </div>
  );
}
