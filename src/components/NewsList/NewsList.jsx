import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsList.module.css';

const NewsList = (props) => {
  const { list } = props;
  return (
    <ul className={styles.NewsList}>
      {list.map(item => (
        <li className={styles.NewsList__Item} key={item.id}>
          <p className={styles.NewsList__Category}>{item.category}</p>
          <h3 className={styles.NewsList__Title}>
            <a className={styles.NewsList__Link} href={item.href}>
              {item.title}
            </a>
          </h3>
        </li>
      ))}
    </ul>
  );
};

NewsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default NewsList;
