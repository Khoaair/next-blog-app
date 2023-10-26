import styles from './menu.module.css';

import MenuPost from '../menuPost/MenuPost';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menu__subtitle}>{"What's hot"}</h2>
      <h1 className={styles.menu__title}>Most Popular</h1>
      <MenuPost withImage={false} />
      <h2 className={styles.menu__subtitle}>{'Discover by topic'}</h2>
      <h1 className={styles.menu__title}>Category</h1>
      <MenuCategories />
      <h2 className={styles.menu__subtitle}>{'Chosen by the editor'}</h2>
      <h1 className={styles.menu__title}>Editor Pick</h1>
      <MenuPost withImage={true} />
    </div>
  );
};
export default Menu;
