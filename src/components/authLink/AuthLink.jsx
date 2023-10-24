'use client';

import Link from 'next/link';
import styles from './authlink.module.css';
import { useState } from 'react';

const AuthLink = () => {
  const status = 'unauthenticated';
  const [open, setOpen] = useState(false);
  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href='/login' className={styles.auth__link}>
          Login
        </Link>
      ) : (
        <div className={styles.auth}>
          <Link href='/write' className={styles.auth__link}>
            Wrtie
          </Link>
          <span className={styles.auth__link}>Logout</span>
        </div>
      )}
      <div
        className={styles.auth__burger}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={styles.auth__line}></div>
        <div className={styles.auth__line}></div>
        <div className={styles.auth__line}></div>
      </div>
      {open && (
        <div className={styles.responsive__menu}>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
          {status === 'unauthenticated' ? (
            <Link href='/login'>Login</Link>
          ) : (
            <div className={styles.auth}>
              <Link href='/write'>Wrtie</Link>
              <span className={styles.auth__link}>Logout</span>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default AuthLink;
