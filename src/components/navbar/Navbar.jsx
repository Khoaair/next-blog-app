import styles from './navbar.module.css';

import Image from 'next/image';
import Link from 'next/link';

import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLink from '../authLink/AuthLink';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__social}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='instagram' width={24} height={24} />
        <Image src='/youtube.png' alt='youtube' width={24} height={24} />
      </div>
      <Link href='/' className={styles.navbar__logo}>
        Daily Blog
      </Link>
      <div className={styles.navbar__links}>
        <ThemeToggle />
        <Link href='/' className={styles.navbar__link}>
          Homepage
        </Link>
        <Link href='/contact' className={styles.navbar__link}>
          Contact
        </Link>
        <Link href='/' className={styles.navbar__link}>
          About
        </Link>
        <AuthLink />
      </div>
    </div>
  );
};
export default Navbar;
