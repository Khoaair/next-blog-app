import CardList from '@/components/cardList/CardList';
import styles from './blogPage.module.css';
import Menu from '@/components/menu/Menu';

const BlogPage = () => {
  return (
    <div className={styles.blogpage}>
      <h1 className={styles.blogpage__title}>Style Blog</h1>
      <div className={styles.blogpage__content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};
export default BlogPage;
