import Link from 'next/link';
import styles from './authlink.module.css';

const AuthLink = () => {
  const status = 'authenticated';
  return (
    <div>
      {status === 'unauthenticated' ? (
        <Link href='/login'>Login</Link>
      ) : (
        <div className={styles.auth}>
          <Link href='/write'>Wrtie</Link>
          <span className={styles.auth__link}>Logout</span>
        </div>
      )}
    </div>
  );
};
export default AuthLink;
