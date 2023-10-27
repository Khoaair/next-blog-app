import styles from './pagination.module.css';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <button className={styles.pagination__button}>previous</button>
      <button className={styles.pagination__button}>next</button>
    </div>
  );
};
export default Pagination;
