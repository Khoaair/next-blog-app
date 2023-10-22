import Featured from '@/components/featured/Featured';
import styles from './homepage.module.css';
import Category from '@/components/category/Category';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';
export default function Home() {
  return (
    <div className={styles.homepage}>
      <Featured />
      <Category />
      <div className={styles.homepage__content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
