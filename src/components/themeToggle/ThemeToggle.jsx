'use client';

import Image from 'next/image';
import styles from './themeToggle.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className={styles.theme}
      onClick={toggle}
      style={
        theme === 'dark'
          ? { backgroundColor: 'white' }
          : { backgroundColor: '#0f172a' }
      }
    >
      <Image src='/moon.png' alt='' height={14} width={14} />
      <div
        className={styles.theme__ball}
        style={
          theme === 'dark'
            ? { left: 1, backgroundColor: '#0f172a' }
            : { right: 1, backgroundColor: 'white' }
        }
      ></div>
      <Image src='/sun.png' alt='' height={14} width={14} />
    </div>
  );
};
export default ThemeToggle;
