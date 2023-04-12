import React from 'react';
import ThemeChange from '../ThemeChange/ThemeChange';
import style from './Nav.module.pcss';

export default function Nav({ filters, filter, onFilterChange }) {
  return (
    <header className={`${style.header} ${style.headerColor}`}>
      <ThemeChange />
      <nav>
        {filters.map((i, index) => (
          <span
            key={index}
            className={filter === i ? style.active : undefined}
            onClick={() => onFilterChange(i)}
          >
            {i}
          </span>
        ))}
      </nav>
    </header>
  );
}
