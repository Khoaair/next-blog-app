import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import styles from './cardList.module.css';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-cache',
  });

  if (!res.ok) {
    return new Error('Failed');
  }
  return res.json();
};

const CardList = async () => {
  const data = await getData();
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
