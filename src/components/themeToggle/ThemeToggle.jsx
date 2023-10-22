'use client';

import Image from 'next/image';
import styles from './themeToggle.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.theme}>
      <Image src='/moon.png' alt='' height={14} width={14} />
      <div className={styles.theme__ball}></div>
      <Image src='/sun.png' alt='' height={14} width={14} />
    </div>
  );
};
export default ThemeToggle;
