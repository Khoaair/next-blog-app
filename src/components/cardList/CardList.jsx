import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import styles from './cardList.module.css';

const CardList = () => {
  return (
    <div className={styles.cardList}>
      <h1 className={styles.cardList__title}>Recent post</h1>
      <div className={styles.cardList__posts}>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};
export default CardList;
