import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './Highlight.module.css';

const Highlight = (props) => {
  const {
    cta, img, title, text,
  } = props;
  return (
    <div className={styles.Highlight}>
      <img alt="" src={img} />
      <h3>{title}</h3>
      <p>{text}</p>
      <Button>{cta}</Button>
    </div>
  );
};

Highlight.propTypes = {
  cta: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Highlight;
