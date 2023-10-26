import Featured from '@/components/featured/Featured';
import Category from '@/components/category/Category';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';
import styles from './homepage.module.css';
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
