'use client';

import { useRouter } from 'next/navigation';
import styles from './loginPage.module.css';
import { signIn, useSession } from 'next-auth/react';

const LoginPage = () => {
  const { data, status } = useSession();
  const route = useRouter();

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === 'authenticated') {
    route.push('/');
  }

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <div className={styles.social__button} onClick={() => signIn('google')}>
          Sign in with Google
        </div>
        <div className={styles.social__button}>Sign in with Github</div>
        <div className={styles.social__button}>Sign in with Facebook</div>
      </div>
    </div>
  );
};
export default LoginPage;
