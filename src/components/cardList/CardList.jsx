import Pagination from '../pagination/Pagination';
import styles from './cardList.module.css';

const CardList = () => {
  return (
    <div className={styles.cardList}>
      <Pagination />
    </div>
  );
};
export default CardList;
